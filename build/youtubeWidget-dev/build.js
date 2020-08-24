/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/youtubeWidget/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function widgetMob() {\n    if ((/iphone|ipod|ipad|android|blackberry|mini|windows\\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 992)) {\n        return true\n    } else {\n        return false\n    }\n}\n\nvar setStyle = function (p_elem, p_styles) {\n    var s;\n    for (s in p_styles) {\n        p_elem.style[s] = p_styles[s];\n    }\n}\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var topdent = {\n    release: \"0.0.1\",\n    widgetVideo: widgetVideo.bind(null),\n    bannerMobile: bannerMobile.bind(null),\n};\n\nconsole.log(\"Версия библиотеки виджетов: \" + topdent.release)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/youtubeWidget/index.js":
/*!************************************!*\
  !*** ./src/youtubeWidget/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.js */ \"./src/helper.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helper_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction widgetVideo(params) {\n    let video = params.videoId ? params.videoId : 'M7lc1UVf-VE'; // Ссылка на видео \n    let width = params.width ? params.width : 240 // Параметры размера\n    let marginSide = params.marginSide ? params.marginSide : 50; //отступ со стороны\n    let marginBottom = params.marginBottom ? params.marginBottom : 50; //отступ снизу\n\n    //create element\n    var widgetVideo = document.createElement('div') // Обертка  \n    var widgetVideoBlock = document.createElement('div'); // Основной блок\n    var widgetVideoBlockVideo = document.createElement('div'); // Блок с видео \n    var widgetVideoBlockClick = document.createElement('span'); // Блок с накладкой\n    var widgetVideoBlockClose = document.createElement('span'); // Крестик блок\n    var widgetVideoBlockCloseLine = document.createElement('span'); // Крестик линия\n    var widgetVideoBlockCloseLineTwo = document.createElement('span'); //Крестик линия два\n\n    // Выстраиваем шаблон\n    widgetVideo.appendChild(widgetVideoBlock)\n    widgetVideoBlock.appendChild(widgetVideoBlockVideo)\n    widgetVideoBlock.appendChild(widgetVideoBlockClick)\n    widgetVideoBlock.appendChild(widgetVideoBlockClose)\n    widgetVideoBlockClose.appendChild(widgetVideoBlockCloseLine)\n    widgetVideoBlockClose.appendChild(widgetVideoBlockCloseLineTwo)\n\n    // Устанавливаем атрибуты\n    widgetVideoBlockVideo.setAttribute(\"id\", \"player\")\n    widgetVideo.className = 'getreview-widget';\n    widgetVideo.setAttribute(\"id\", \"getreview_widget\");\n\n\n\n    // Стилизация блоков\n\n    setStyle(widgetVideo, {\n        'position': 'fixed',\n        'zIndex': '999999'\n    })\n\n    setStyle(widgetVideoBlock, {\n        'zIndex': '999999',\n        'overflow': 'hidden',\n        'borderStyle': 'solid',\n        'background': '#eeeeee',\n        'boxShadow': '0px 10px 20px rgba(0, 0, 0, 0.40)',\n        'transition': 'transform 0.2s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, bottom 0.3s ease-in-out, border-color 0.2s ease-in-out, opacity 1s ease-in-out',\n        'outline': 'none',\n        'cursor': 'pointer',\n        'boxSizing': 'border-box',\n        'userSelect': 'none'\n    });\n\n    setStyle(widgetVideoBlockClick, {\n        'zIndex': '999999',\n        'position': 'absolute',\n        'left': '0',\n        'right': '0',\n        'bottom': 0,\n        'top': 0,\n        'background': '#fff',\n        'opacity': 0.2\n    });\n\n\n\n    setStyle(widgetVideoBlock, {\n\n        'borderRadius': '20px',\n        'borderWidth:': '3px',\n        'borderColor': 'rgb(255, 255, 255)',\n\n    });\n\n    setStyle(widgetVideoBlockClose, {\n        'position': 'absolute',\n        'top': '6px',\n        'right': '6px',\n        'width': '20px',\n        'height': '20px',\n        'z-index': '250',\n        'opacity': '0',\n        'zIndex': '999999',\n        'transition': 'transform 0.3s ease-in-out 0s, opacity 0.2s ease-in-out 0s'\n    })\n    setStyle(widgetVideoBlockCloseLine, {\n        'position': 'absolute',\n        'transform': 'rotate(45deg)',\n        'left': '9px',\n        'top': '1px',\n        'height': '18px',\n        'width': '2px',\n        'box-shadow': 'rgba(0, 0, 0, 0.5) 1px 1px 10px;',\n        'background': 'white'\n    })\n    setStyle(widgetVideoBlockCloseLineTwo, {\n        'position': 'absolute',\n        'transform': 'rotate(-45deg)',\n        'left': '9px',\n        'top': '1px',\n        'height': '18px',\n        'width': '2px',\n        'box-shadow': 'rgba(0, 0, 0, 0.5) 1px 1px 10px;',\n        'background': 'white'\n    })\n\n    //css video\n    setStyle(widgetVideoBlockVideo, {\n        'objectFit': 'cover',\n        'position': 'absolute',\n        'top': '50%',\n        'left': '50%',\n        'transform': 'translate(-50%, -50%)',\n        'minWidth': '102%',\n        'minHeight': '102%',\n        'zIndex': '200',\n        'transition': 'opacity 0.4s ease-in-out 0s'\n    });\n\n    // Стилизация для выбора стороны\n    if (params.position == 'right') {\n        setStyle(widgetVideoBlock, {\n            'position': 'absolute',\n            'right': widgetMob() ? \"\".concat(Math.ceil(.75 * marginSide), \"px\") : marginSide + 'px',\n            'bottom': widgetMob() ? \"\".concat(Math.ceil(.75 * marginBottom), \"px\") : marginBottom + 'px',\n        })\n        setStyle(widgetVideo, {\n            'right': 0,\n            'bottom': 0,\n        })\n\n    } else {\n        setStyle(widgetVideoBlock, {\n            'position': 'absolute',\n            'left': widgetMob() ? \"\".concat(Math.ceil(.75 * marginSide), \"px\") : marginSide + 'px',\n            'bottom': widgetMob() ? \"\".concat(Math.ceil(.75 * marginBottom), \"px\") : marginBottom + 'px'\n        })\n        setStyle(widgetVideo, {\n            'left': 0,\n            'bottom': 0,\n        })\n    }\n\n    // Адаптив\n    if (widgetMob()) {\n        setStyle(widgetVideoBlock, {\n            'maxWidth': 320 - Math.ceil(.75 * marginSide) + 'px'\n        })\n    }\n\n    let clicked = true;\n    let stateHover = true;\n    let stateOpen = false;\n    let stateCloseBg = false;\n    let styleHover = (function () {\n        setStyle(widgetVideoBlock, {\n            'borderColor': 'rgb(0, 0, 255)',\n            'transform': 'scale(1.05) translate(5px, -5px)'\n        })\n    })\n    let styleOrientation = (function (item) {\n        // Стилизация размера под 16:9 и 9:16\n        if (params.orientation == 'vertical') {\n            width = item;\n            setStyle(widgetVideoBlock, {\n                'width': widgetMob() ? \"\".concat(Math.ceil(.75 * width), \"px\") : width + 'px',\n                'height': ((widgetMob() ? \"\".concat(Math.ceil(.75 * width)) : width) * 16) / 9 + 'px'\n            });\n        } else {\n            width = item;\n            setStyle(widgetVideoBlock, {\n                'width': widgetMob() ? \"\".concat(Math.ceil(.75 * width), \"px\") : width + 'px',\n                'height': (((widgetMob() ? \"\".concat(Math.ceil(.75 * width)) : width)) * 9) / 16 + 'px'\n            });\n        }\n    })\n    styleOrientation(width)\n\n    widgetVideoBlock.addEventListener(\"mouseover\", function () {\n        if (stateHover === true) {\n            setStyle(widgetVideoBlockClose, {\n                'opacity': '1',\n            })\n            styleHover()\n        }\n    })\n    widgetVideoBlock.addEventListener(\"mouseout\", function () {\n        if (stateHover === true) {\n            setStyle(widgetVideoBlock, {\n                'borderColor': 'rgb(255, 255, 255)',\n                'transform': 'scale(1) translate(0,0)'\n            })\n\n            setStyle(widgetVideoBlockClose, {\n                'opacity': '0',\n            })\n        }\n    })\n\n    function loadVideo(item) {\n        (function loadYoutubeIFrameApiScript() {\n            const tag = document.createElement(\"script\");\n            tag.src = \"https://www.youtube.com/iframe_api\";\n\n            const firstScriptTag = document.getElementsByTagName(\"script\")[0];\n            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n\n            tag.onload = setupPlayer;\n        })();\n\n        let player = null;\n\n        function setupPlayer() {\n            window.YT.ready(function () {\n                player = new window.YT.Player(\"player\", {\n                    height: \"100%\",\n                    width: \"100%\",\n                    videoId: item,\n                    playerVars: {\n                        'playlist': item,\n                        'modestbranding': 1,\n                        'loop': 1,\n                        'autoplay': 1,\n                        'controls': 0,\n                        'iv_load_policy': 3,\n                        'showinfo': 0,\n                        'rel': 0,\n                        'fs': 0,\n                        'disablekb': 0\n                    },\n                    events: {\n                        'onReady': onPlayerReady\n                    }\n                });\n\n                function onPlayerReady(event) {\n                    if (stateOpen === false) {\n                        player.mute();\n                    }\n                    widgetVideoBlockClose.onclick = function () {\n                        if (stateOpen === false) {\n                            widgetVideo.parentNode.removeChild(widgetVideo);\n                        } else {\n                            player.mute();\n                            styleOrientation(Math.ceil(.5 * width))\n\n                            setStyle(widgetVideoBlockCloseLine, {\n                                'transform': 'rotate(45deg)',\n                            })\n                            setStyle(widgetVideoBlockCloseLineTwo, {\n                                'transform': 'rotate(-45deg)',\n                            })\n                            setStyle(widgetVideoBlockClick, {\n                                'display': 'block',\n                            })\n                            setStyle(widgetVideoBlock, {\n                                'borderColor': 'rgb(255, 255, 255)',\n                            })\n\n                            stateOpen = false\n                            stateCloseBg = false\n                            stateHover = true\n                        }\n                    }\n\n                    widgetVideoBlockClick.onclick = function () {\n\n                        if (stateOpen === false) {\n                            styleOrientation(Math.ceil(2 * width))\n                            player.unMute()\n\n                            setStyle(widgetVideoBlockClick, {\n                                'display': 'none',\n                            })\n                            setStyle(widgetVideoBlock, {\n                                'borderColor': 'rgb(0, 0, 255)',\n                                'transform': 'none'\n                            })\n                            setStyle(widgetVideoBlockCloseLine, {\n                                'transform': 'rotate(90deg)',\n                            })\n                            setStyle(widgetVideoBlockCloseLineTwo, {\n                                'transform': 'rotate(90deg)',\n                            })\n                            stateHover = false;\n                            stateOpen = true;\n                            stateCloseBg = true;\n                        }\n\n                        return false;\n                    }\n                    document.addEventListener('click', function (event) {\n                        var e = widgetVideo;\n\n                        if (!e.contains(event.target)) {\n\n                            if (stateCloseBg === true) {\n\n                                player.mute();\n                                setStyle(widgetVideoBlockCloseLine, {\n                                    'transform': 'rotate(45deg)',\n                                })\n                                setStyle(widgetVideoBlockCloseLineTwo, {\n                                    'transform': 'rotate(-45deg)',\n                                })\n\n                                styleOrientation(Math.ceil(.5 * width))\n\n                                setStyle(widgetVideoBlockClick, {\n                                    'display': 'block',\n                                })\n                                setStyle(widgetVideoBlock, {\n                                    'borderColor': 'rgb(255, 255, 255)',\n                                })\n                                stateCloseBg = false;\n                                stateOpen = false;\n                                stateHover = true;\n                            }\n                        }\n                    });\n                }\n            });\n        }\n    }\n\n    if (document.readyState !== \"loading\") {\n        loadVideo(video);\n    } else {\n        document.addEventListener(\"DOMContentLoaded\", function () {\n            loadVideo(video);\n        });\n    }\n    document.body.append(widgetVideo);\n}\n\n//# sourceURL=webpack:///./src/youtubeWidget/index.js?");

/***/ })

/******/ });