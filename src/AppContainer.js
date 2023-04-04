import React from 'react';
import './App.css';
import './textLayer';
import { TextLayer } from "./textLayer";
import Resizer from "react-image-file-resizer";
import * as htmlToImage from "html-to-image";
import { Button, CircularProgress, TextField } from '@mui/material';
import { AlphaPicker, ChromePicker } from 'react-color';

export class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
        this.state = {
            threshold: 0,
            letters: [],
            backgroundImage: null,
            loading: false,
            imageLoaded: false,
            opacity: 1,
            opacityInputValue: 100,
            color: { hex: '#000000', rgb: { r: 0, g: 0, b: 0 } },
            blockedCells: 0,
            rangeThreshold: 0
        };
    }

    componentDidMount() {
        const opacityInputValue = Math.round(this.state.opacity * 100);
        this.setState({ opacityInputValue });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.opacity !== this.state.opacity) {
            this.setState({ opacityInputValue: Math.round(this.state.opacity * 100) });
        }
    }

    handleOpacityChange = (value) => {
        const opacity = value.rgb.a;
        this.setState({ opacity });
    }

    handleOpacityInputChange = (event) => {
        const inputValue = parseInt(event.target.value);

        if (inputValue < 1 || inputValue > 100 || isNaN(inputValue)) {
            return;
        }

        this.handleOpacityChange({ rgb: { r: 0, g: 0, b: 0, a: inputValue / 100 } });
    }

    selectInputValue = (field) => {
        field.target.select();
    }

    getRandomLetters = () => {
        const letters = []
        for (let i = 0; i < 24; i++) {
            const row = [];
            for (let j = 0; j < 24; j++) {
                row.push(this.getRandomLetter());
            }
            letters.push(row);
        }
        return letters
    }

    rgbToGrayscale = (r, g, b) => {
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    blockCellsBelowThreshold = async () => {
        return new Promise(async (resolve, reject) => {
            const originalImageHtml = document.querySelector(".originalImage");
            const whiteBackgroundImageHtml = document.querySelector(".whiteBackgroundImage");

            const originalImageBase64 = await htmlToImage.toPng(originalImageHtml, { quality: 1, pixelRatio: 1 });
            const whiteBackgroundImageBase64 = await htmlToImage.toPng(whiteBackgroundImageHtml, { quality: 1, pixelRatio: 1 });

            const imageUrls = [originalImageBase64, whiteBackgroundImageBase64];

            Promise.all(imageUrls.map(e =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = e;
                })
            )).then((result) => {
                const originalImage = result[0];
                const whiteBackgroundImage = result[1];
                let newLetters = new Array(24);
                for (var h = 0; h < newLetters.length; h++) {
                    newLetters[h] = new Array(24);
                }
                const height = 650;
                const width = 500;
                const padding = 0;
                const cellPxHeight = (height - (padding * 2)) / 24;
                const cellPxWidth = (width - (padding * 2)) / 24;

                const originalCanvas = document.createElement('canvas');
                const whiteBackgroundCanvas = document.createElement('canvas');

                originalCanvas.width = width;
                originalCanvas.height = height;

                whiteBackgroundCanvas.width = width;
                whiteBackgroundCanvas.height = height;

                const originalContext = originalCanvas.getContext('2d');
                const whiteBackgroundContext = whiteBackgroundCanvas.getContext('2d');

                originalContext.drawImage(originalImage, 0, 0, width, height);
                whiteBackgroundContext.drawImage(whiteBackgroundImage, 0, 0, width, height);

                const originalImageData = originalContext.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
                const whiteBackgroundImageData = whiteBackgroundContext.getImageData(0, 0, whiteBackgroundCanvas.width, whiteBackgroundCanvas.height);

                let currRowPxCount = padding;
                let currColPxCount = padding;
                let blockedCells = 0;

                for (let row = 0; row < 24; row++) {
                    for (let col = 0; col < 24; col++) {
                        newLetters[row][col] = this.state.letters[row][col];
                        let belowThreshold = false;
                        let darkestPixel = 255;
                        let brightestPixel = 0;
                        for (let m = 0; m < Math.round(cellPxWidth); m++) {
                            for (let n = 0; n < Math.round(cellPxHeight); n++) {
                                const blackPixel = this.getPx(whiteBackgroundImageData, Math.round(currRowPxCount + m), Math.round(currColPxCount + n));

                                if (blackPixel.r !== 0 && blackPixel.g !== 0 && blackPixel.b !== 0) {
                                    continue;
                                }

                                const originalPixel = this.getPx(originalImageData, Math.round(currRowPxCount + m), Math.round(currColPxCount + n));
                                const grayscale = this.rgbToGrayscale(originalPixel.r, originalPixel.g, originalPixel.b);

                                if (grayscale < darkestPixel) {
                                    darkestPixel = grayscale;
                                }

                                if (grayscale > brightestPixel) {
                                    brightestPixel = grayscale;
                                }

                                if (grayscale <= parseFloat(this.state.threshold)) {
                                    belowThreshold = true;
                                    newLetters[row][col] = '~';
                                    blockedCells++;
                                    break;
                                }
                            }
                            if (belowThreshold) {
                                break;
                            }
                        }
                        if (!belowThreshold && (brightestPixel - darkestPixel >= parseFloat(this.state.rangeThreshold))) {
                            newLetters[row][col] = '#';
                            blockedCells++;
                        }
                        currRowPxCount += cellPxWidth;
                    }
                    currRowPxCount = padding;
                    currColPxCount += cellPxHeight;
                }
                this.setState({ blockedCells });
                resolve(newLetters);
            }).catch(() => {
                reject();
            });
        }).catch((e) => {
            console.error(e);
        })
    };

    getPx = (imageData, x, y) => {
        var data32 = new Uint32Array(imageData.data.buffer),
            val32 = data32[y * imageData.width + x],
            str32,
            a = 0,
            b = 0,
            g = 0,
            r = 0;

        if (val32 > 0) {
            str32 = val32.toString(16);
            a = parseInt(str32.substr(0, 2), 16);
            b = parseInt(str32.substr(2, 2), 16);
            g = parseInt(str32.substr(4, 2), 16);
            r = parseInt(str32.substr(6, 2), 16);
        }

        return {
            r: r,
            g: g,
            b: b,
            a: a,
        };
    };

    fileChangedHandler(event) {
        var fileInput = false;
        if (event.target.files[0]) {
            fileInput = true;
        }
        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    event.target.files[0],
                    556,
                    696,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        const letters = this.getRandomLetters();
                        this.setState({ backgroundImage: uri, letters: letters });
                    },
                    "base64",
                    556,
                    696
                );
                this.setState({ imageLoaded: true });
            } catch (err) {
                console.log(err);
            }
        }
    }

    getRandomLetter = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };

    render() {
        return (
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', flexDirection: 'column', paddingTop: '10px', paddingBottom: '10px', }} className="App">
                {
                    this.state.loading && (
                        <div style={{ position: 'absolute', backgroundColor: 'white', zIndex: 999, width: '100%', height: '100%' }}>
                            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <CircularProgress />
                            </div>
                        </div>
                    )
                }
                <div style={{ marginBottom: '10px' }}>
                    <input type={"file"} id={'imageUpload'} name={'imageUpload'} onChange={this.fileChangedHandler} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    Blocked cells {this.state.blockedCells}
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='originalImage' style={{ width: '500px', height: '650px', position: 'relative' }}>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <img alt={""} style={{ width: '500px', height: '650px' }} src={this.state.backgroundImage} />
                        </div>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <div style={{ width: '100%', height: '100%' }}>
                                <TextLayer letters={this.state.letters} color={this.state.color.hex} opacity={this.state.opacity} />
                            </div>
                        </div>
                    </div>
                    <div className='whiteBackgroundImage' style={{ width: '500px', height: '650px', position: 'relative', backgroundColor: 'white', display: `${this.state.loading ? 'block' : 'none'}` }}>
                        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                            <div style={{ width: '100%', height: '100%' }}>
                                <TextLayer letters={this.state.letters} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <div style={{ position: 'relative', width: '316px', height: '16px' }}>
                        <AlphaPicker
                            color={{ h: 250, s: 0, l: 0.2, a: this.state.opacity }}
                            onChange={(value) => {
                                this.handleOpacityChange(value);
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
                        <TextField
                            style={{ width: '75px' }}
                            type="number"
                            value={this.state.opacityInputValue}
                            inputProps={{ min: "1", max: "100", step: "1" }}
                            onChange={this.handleOpacityInputChange}
                            onFocus={this.selectInputValue}
                            onClick={this.selectInputValue}
                        />
                        <span style={{ marginLeft: 10 }}>%</span>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: '10px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField
                            margin='normal'
                            type="number"
                            id="outlined-basic"
                            label="Darkness Threshold (0 - 255)"
                            variant="outlined"
                            value={this.state.threshold}
                            onChange={(event) => {
                                if (event.target.value >= 0 && event.target.value <= 255) {
                                    this.setState({ threshold: event.target.value });
                                }
                            }}
                        />
                        <TextField
                            margin='normal'
                            type="number"
                            id="outlined-basic"
                            label="Range Threshold (0 - 255)"
                            variant="outlined"
                            value={this.state.rangeThreshold}
                            onChange={(event) => {
                                if (event.target.value >= 0 && event.target.value <= 255) {
                                    this.setState({ rangeThreshold: event.target.value });
                                }
                            }}
                        />
                    </div>
                    <div style={{ marginLeft: '40px' }}>
                        <ChromePicker width={'200px'} height={'200px'} disableAlpha={true} color={this.state.color} onChangeComplete={(color) => { this.setState({ color }) }} />
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <Button
                        style={{ marginRight: 5 }}
                        onClick={async () => {
                            this.setState({ loading: true });
                            const result = await this.blockCellsBelowThreshold();
                            this.setState({ loading: false, letters: result });
                        }}
                        variant='outlined'
                        disabled={!this.state.imageLoaded}
                    >
                        Block cells
                    </Button>
                    <Button
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                            const result = this.getRandomLetters();
                            this.setState({ letters: result, blockedCells: 0 });
                        }}
                        variant='outlined'
                    >
                        Reset
                    </Button>
                </div>
            </div>
        )
    }
}
