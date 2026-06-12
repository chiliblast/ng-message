import {
  require_index_umd
} from "./chunk-INH2SPXL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-B4NDS4B7.js";

// node_modules/WebSdk/index.js
var require_WebSdk = __commonJS({
  "node_modules/WebSdk/index.js"(exports, module) {
    module.exports = typeof window !== "undefined" ? window.WebSdk : void 0;
  }
});

// node_modules/@digitalpersona/devices/node_modules/tslib/tslib.es6.js
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

// node_modules/@digitalpersona/devices/dist/es5/common/events.js
var Event = (
  /** @class */
  /* @__PURE__ */ (function() {
    function Event2(type) {
      this.type = type;
    }
    return Event2;
  })()
);
var CommunicationFailed = (
  /** @class */
  (function(_super) {
    __extends(CommunicationFailed2, _super);
    function CommunicationFailed2() {
      return _super.call(this, "CommunicationFailed") || this;
    }
    return CommunicationFailed2;
  })(Event)
);

// node_modules/@digitalpersona/devices/dist/es5/devices/events.js
var DeviceEvent = (
  /** @class */
  (function(_super) {
    __extends(DeviceEvent2, _super);
    function DeviceEvent2(type, deviceId) {
      var _this = _super.call(this, type) || this;
      _this.deviceId = deviceId;
      return _this;
    }
    return DeviceEvent2;
  })(Event)
);
var DeviceConnected = (
  /** @class */
  (function(_super) {
    __extends(DeviceConnected2, _super);
    function DeviceConnected2(deviceId) {
      return _super.call(this, "DeviceConnected", deviceId) || this;
    }
    return DeviceConnected2;
  })(DeviceEvent)
);
var DeviceDisconnected = (
  /** @class */
  (function(_super) {
    __extends(DeviceDisconnected2, _super);
    function DeviceDisconnected2(deviceId) {
      return _super.call(this, "DeviceDisconnected", deviceId) || this;
    }
    return DeviceDisconnected2;
  })(DeviceEvent)
);

// node_modules/@digitalpersona/devices/dist/es5/devices/cards/cards.js
var CardType;
(function(CardType2) {
  CardType2[CardType2["Contact"] = 1] = "Contact";
  CardType2[CardType2["Contactless"] = 2] = "Contactless";
  CardType2[CardType2["Proximity"] = 4] = "Proximity";
})(CardType || (CardType = {}));
var CardAttributes;
(function(CardAttributes2) {
  CardAttributes2[CardAttributes2["SupportsPIN"] = 1] = "SupportsPIN";
  CardAttributes2[CardAttributes2["SupportsUID"] = 2] = "SupportsUID";
  CardAttributes2[CardAttributes2["IsPKI"] = 65536] = "IsPKI";
  CardAttributes2[CardAttributes2["IsPIV"] = 131072] = "IsPIV";
  CardAttributes2[CardAttributes2["IsReadOnly"] = 2147483648] = "IsReadOnly";
})(CardAttributes || (CardAttributes = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/cards/events.js
var CardInserted = (
  /** @class */
  (function(_super) {
    __extends(CardInserted2, _super);
    function CardInserted2(reader, card) {
      var _this = _super.call(this, "CardInserted", reader) || this;
      _this.cardId = card;
      return _this;
    }
    return CardInserted2;
  })(DeviceEvent)
);
var CardRemoved = (
  /** @class */
  (function(_super) {
    __extends(CardRemoved2, _super);
    function CardRemoved2(reader, card) {
      var _this = _super.call(this, "CardRemoved", reader) || this;
      _this.cardId = card;
      return _this;
    }
    return CardRemoved2;
  })(DeviceEvent)
);

// node_modules/@digitalpersona/devices/dist/es5/private/eventSource.js
var MultiCastEventSource = (
  /** @class */
  (function() {
    function MultiCastEventSource2() {
      this.handlers = {};
    }
    MultiCastEventSource2.prototype._on = function(event, handler) {
      this.handlers[event] = this.handlers[event] || [];
      this.handlers[event].push(handler);
      return handler;
    };
    MultiCastEventSource2.prototype._off = function(event, handler) {
      if (event) {
        var hh = this.handlers[event];
        if (hh) {
          if (handler)
            this.handlers[event] = hh.filter(function(h) {
              return h !== handler;
            });
          else
            delete this.handlers[event];
        }
      } else
        this.handlers = {};
      return this;
    };
    MultiCastEventSource2.prototype.emit = function(event) {
      var _this = this;
      if (!event)
        return;
      var eventName = event.type;
      var unicast = this["on" + eventName];
      if (unicast)
        this.invoke(unicast, event);
      var multicast = this.handlers[eventName];
      if (multicast)
        multicast.forEach(function(h) {
          return _this.invoke(h, event);
        });
    };
    MultiCastEventSource2.prototype.invoke = function(handler, event) {
      try {
        handler(event);
      } catch (e) {
        console.error(e);
      }
    };
    return MultiCastEventSource2;
  })()
);

// node_modules/@digitalpersona/devices/dist/es5/devices/websdk/channel.js
var import_core = __toESM(require_index_umd());

// node_modules/@digitalpersona/devices/dist/es5/devices/websdk/messages.js
var MessageType;
(function(MessageType3) {
  MessageType3[MessageType3["Response"] = 0] = "Response";
  MessageType3[MessageType3["Notification"] = 1] = "Notification";
})(MessageType || (MessageType = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/websdk/channel.js
var import_WebSdk = __toESM(require_WebSdk());
var Channel = (
  /** @class */
  (function() {
    function Channel2(channelName, options) {
      this.pending = [];
      this.webChannel = new WebSdk.WebChannelClient(channelName, options);
      this.webChannel.onConnectionSucceed = this.onConnectionSucceed.bind(this);
      this.webChannel.onConnectionFailed = this.onConnectionFailed.bind(this);
      this.webChannel.onDataReceivedTxt = this.onDataReceivedTxt.bind(this);
    }
    Channel2.prototype.send = function(request, timeout) {
      var deferred = new Promise(function(resolve, reject) {
        request.resolve = resolve;
        request.reject = reject;
        if (timeout) {
          request.timer = window.setTimeout(function() {
            if (request.timer)
              try {
                request.reject(new Error("Timeout"));
              } catch (e) {
              }
          }, timeout);
        }
      });
      this.pending.push(request);
      if (this.webChannel.isConnected())
        this.processRequestQueue();
      else
        this.webChannel.connect();
      return deferred;
    };
    Channel2.prototype.onConnectionSucceed = function() {
      this.processRequestQueue();
    };
    Channel2.prototype.onConnectionFailed = function() {
      this.pending.forEach(function(r) {
        return r.reject(new Error("Communication failure."));
      });
      this.pending = [];
      if (this.onCommunicationError)
        try {
          this.onCommunicationError();
        } catch (e) {
        }
    };
    Channel2.prototype.onDataReceivedTxt = function(data) {
      var message = JSON.parse(import_core.Utf8.fromBase64Url(data));
      if (message.Type === MessageType.Response) {
        var response = JSON.parse(import_core.Utf8.fromBase64Url(message.Data || ""));
        var request = this.findRequest(response);
        if (request !== null) {
          if (request.timer) {
            window.clearTimeout(request.timer);
            delete request.timer;
          }
          var hr = response.Result >>> 0;
          if (hr > 2147483647)
            request.reject(new Error("0x" + hr.toString(16)));
          else
            request.resolve(response);
        } else
          console.log("Orphaned response: " + message.Type);
      } else if (message.Type === MessageType.Notification) {
        var notification = JSON.parse(import_core.Utf8.fromBase64Url(message.Data || ""));
        if (this.onNotification)
          try {
            this.onNotification(notification);
          } catch (e) {
          }
      } else
        console.log("Unknown message type: " + message.Type);
    };
    Channel2.prototype.processRequestQueue = function() {
      var _this = this;
      this.pending.forEach(function(req, i, items) {
        if (!req.sent) {
          _this.webChannel.sendDataTxt(import_core.Base64Url.fromJSON(req.command));
          items[i].sent = true;
        }
      });
    };
    Channel2.prototype.findRequest = function(response) {
      for (var i = 0; i < this.pending.length; i++) {
        var request = this.pending[i];
        if (request.sent && request.command.Method === response.Method) {
          this.pending.splice(i, 1);
          return request;
        }
      }
      return null;
    };
    return Channel2;
  })()
);

// node_modules/@digitalpersona/devices/dist/es5/devices/websdk/command.js
var Command = (
  /** @class */
  /* @__PURE__ */ (function() {
    function Command2(method, parameters) {
      this.Method = method;
      this.Parameters = parameters;
    }
    return Command2;
  })()
);
var Request = (
  /** @class */
  /* @__PURE__ */ (function() {
    function Request2(command) {
      this.command = command;
      this.sent = false;
    }
    return Request2;
  })()
);

// node_modules/@digitalpersona/devices/dist/es5/devices/cards/messages.js
var Method;
(function(Method4) {
  Method4[Method4["EnumerateReaders"] = 1] = "EnumerateReaders";
  Method4[Method4["EnumerateCards"] = 2] = "EnumerateCards";
  Method4[Method4["GetCardInfo"] = 3] = "GetCardInfo";
  Method4[Method4["GetCardUID"] = 4] = "GetCardUID";
  Method4[Method4["GetDPCardAuthData"] = 5] = "GetDPCardAuthData";
  Method4[Method4["GetDPCardEnrollData"] = 6] = "GetDPCardEnrollData";
  Method4[Method4["Subscribe"] = 100] = "Subscribe";
  Method4[Method4["Unsubscribe"] = 101] = "Unsubscribe";
})(Method || (Method = {}));
var NotificationType;
(function(NotificationType3) {
  NotificationType3[NotificationType3["ReaderConnected"] = 1] = "ReaderConnected";
  NotificationType3[NotificationType3["ReaderDisconnected"] = 2] = "ReaderDisconnected";
  NotificationType3[NotificationType3["CardInserted"] = 3] = "CardInserted";
  NotificationType3[NotificationType3["CardRemoved"] = 4] = "CardRemoved";
})(NotificationType || (NotificationType = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/cards/reader.js
var import_core2 = __toESM(require_index_umd());
var CardsReader = (
  /** @class */
  (function(_super) {
    __extends(CardsReader2, _super);
    function CardsReader2(options) {
      var _this = _super.call(this) || this;
      _this.channel = new Channel("smartcards", options);
      _this.channel.onCommunicationError = _this.onConnectionFailed.bind(_this);
      _this.channel.onNotification = _this.processNotification.bind(_this);
      return _this;
    }
    CardsReader2.prototype.on = function(event, handler) {
      return this._on(event, handler);
    };
    CardsReader2.prototype.off = function(event, handler) {
      return this._off(event, handler);
    };
    CardsReader2.prototype.enumerateReaders = function() {
      return this.channel.send(new Request(new Command(Method.EnumerateReaders))).then(function(response) {
        var list = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || "{}"));
        return JSON.parse(list.Readers || "[]");
      });
    };
    CardsReader2.prototype.enumerateCards = function() {
      return this.channel.send(new Request(new Command(Method.EnumerateCards))).then(function(response) {
        var list = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || "{}"));
        var cards = JSON.parse(list.Cards || "[]");
        return cards.map(function(s) {
          return JSON.parse(import_core2.Utf16.fromBase64Url(s));
        });
      });
    };
    CardsReader2.prototype.getCardInfo = function(reader) {
      return this.channel.send(new Request(new Command(Method.GetCardInfo, import_core2.Base64Url.fromJSON({ Reader: reader })))).then(function(response) {
        var cardInfo = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || "null"));
        return cardInfo;
      });
    };
    CardsReader2.prototype.getCardUid = function(reader) {
      return this.channel.send(new Request(new Command(Method.GetCardUID, import_core2.Base64Url.fromJSON({ Reader: reader })))).then(function(response) {
        var data = import_core2.Base64.fromBase64Url(response.Data || "");
        return data;
      });
    };
    CardsReader2.prototype.getCardAuthData = function(reader, pin) {
      return this.channel.send(new Request(new Command(Method.GetDPCardAuthData, import_core2.Base64Url.fromJSON({ Reader: reader, PIN: pin || "" })))).then(function(response) {
        var data = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || ""));
        return data;
      });
    };
    CardsReader2.prototype.getCardEnrollData = function(reader, pin) {
      return this.channel.send(new Request(new Command(Method.GetDPCardEnrollData, import_core2.Base64Url.fromJSON({ Reader: reader, PIN: pin || "" })))).then(function(response) {
        var data = JSON.parse(import_core2.Utf8.fromBase64Url(response.Data || ""));
        return data;
      });
    };
    CardsReader2.prototype.subscribe = function(reader) {
      return this.channel.send(new Request(new Command(Method.Subscribe, reader ? import_core2.Base64Url.fromJSON({ Reader: reader }) : ""))).then();
    };
    CardsReader2.prototype.unsubscribe = function(reader) {
      return this.channel.send(new Request(new Command(Method.Unsubscribe, reader ? import_core2.Base64Url.fromJSON({ Reader: reader }) : ""))).then();
    };
    CardsReader2.prototype.onConnectionFailed = function() {
      this.emit(new CommunicationFailed());
    };
    CardsReader2.prototype.processNotification = function(notification) {
      switch (notification.Event) {
        case NotificationType.ReaderConnected:
          return this.emit(new DeviceConnected(notification.Reader));
        case NotificationType.ReaderDisconnected:
          return this.emit(new DeviceDisconnected(notification.Reader));
        case NotificationType.CardInserted:
          return this.emit(new CardInserted(notification.Reader, notification.Card));
        case NotificationType.CardRemoved:
          return this.emit(new CardRemoved(notification.Reader, notification.Card));
        default:
          console.log("Unknown notification: " + notification.Event);
      }
    };
    return CardsReader2;
  })(
    MultiCastEventSource
    //    implements CommunicationEventSource, DeviceEventSource, CardsEventSource
  )
);

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/device.js
var DeviceUidType;
(function(DeviceUidType2) {
  DeviceUidType2[DeviceUidType2["Persistent"] = 0] = "Persistent";
  DeviceUidType2[DeviceUidType2["Volatile"] = 1] = "Volatile";
})(DeviceUidType || (DeviceUidType = {}));
var DeviceModality;
(function(DeviceModality2) {
  DeviceModality2[DeviceModality2["Unknown"] = 0] = "Unknown";
  DeviceModality2[DeviceModality2["Swipe"] = 1] = "Swipe";
  DeviceModality2[DeviceModality2["Area"] = 2] = "Area";
  DeviceModality2[DeviceModality2["AreaMultifinger"] = 3] = "AreaMultifinger";
})(DeviceModality || (DeviceModality = {}));
var DeviceTechnology;
(function(DeviceTechnology2) {
  DeviceTechnology2[DeviceTechnology2["Unknown"] = 0] = "Unknown";
  DeviceTechnology2[DeviceTechnology2["Optical"] = 1] = "Optical";
  DeviceTechnology2[DeviceTechnology2["Capacitive"] = 2] = "Capacitive";
  DeviceTechnology2[DeviceTechnology2["Thermal"] = 3] = "Thermal";
  DeviceTechnology2[DeviceTechnology2["Pressure"] = 4] = "Pressure";
})(DeviceTechnology || (DeviceTechnology = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/sample.js
var SampleFormat;
(function(SampleFormat2) {
  SampleFormat2[SampleFormat2["Raw"] = 1] = "Raw";
  SampleFormat2[SampleFormat2["Intermediate"] = 2] = "Intermediate";
  SampleFormat2[SampleFormat2["Compressed"] = 3] = "Compressed";
  SampleFormat2[SampleFormat2["PngImage"] = 5] = "PngImage";
})(SampleFormat || (SampleFormat = {}));
var QualityCode;
(function(QualityCode2) {
  QualityCode2[QualityCode2["Good"] = 0] = "Good";
  QualityCode2[QualityCode2["NoImage"] = 1] = "NoImage";
  QualityCode2[QualityCode2["TooLight"] = 2] = "TooLight";
  QualityCode2[QualityCode2["TooDark"] = 3] = "TooDark";
  QualityCode2[QualityCode2["TooNoisy"] = 4] = "TooNoisy";
  QualityCode2[QualityCode2["LowContrast"] = 5] = "LowContrast";
  QualityCode2[QualityCode2["NotEnoughFeatures"] = 6] = "NotEnoughFeatures";
  QualityCode2[QualityCode2["NotCentered"] = 7] = "NotCentered";
  QualityCode2[QualityCode2["NotAFinger"] = 8] = "NotAFinger";
  QualityCode2[QualityCode2["TooHigh"] = 9] = "TooHigh";
  QualityCode2[QualityCode2["TooLow"] = 10] = "TooLow";
  QualityCode2[QualityCode2["TooLeft"] = 11] = "TooLeft";
  QualityCode2[QualityCode2["TooRight"] = 12] = "TooRight";
  QualityCode2[QualityCode2["TooStrange"] = 13] = "TooStrange";
  QualityCode2[QualityCode2["TooFast"] = 14] = "TooFast";
  QualityCode2[QualityCode2["TooSkewed"] = 15] = "TooSkewed";
  QualityCode2[QualityCode2["TooShort"] = 16] = "TooShort";
  QualityCode2[QualityCode2["TooSlow"] = 17] = "TooSlow";
  QualityCode2[QualityCode2["ReverseMotion"] = 18] = "ReverseMotion";
  QualityCode2[QualityCode2["PressureTooHard"] = 19] = "PressureTooHard";
  QualityCode2[QualityCode2["PressureTooLight"] = 20] = "PressureTooLight";
  QualityCode2[QualityCode2["WetFinger"] = 21] = "WetFinger";
  QualityCode2[QualityCode2["FakeFinger"] = 22] = "FakeFinger";
  QualityCode2[QualityCode2["TooSmall"] = 23] = "TooSmall";
  QualityCode2[QualityCode2["RotatedTooMuch"] = 24] = "RotatedTooMuch";
})(QualityCode || (QualityCode = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/events.js
var SamplesAcquired = (
  /** @class */
  (function(_super) {
    __extends(SamplesAcquired2, _super);
    function SamplesAcquired2(deviceUid, sampleFormat, sampleData) {
      var _this = _super.call(this, "SamplesAcquired", deviceUid) || this;
      _this.sampleFormat = sampleFormat;
      _this.samples = JSON.parse(sampleData);
      return _this;
    }
    return SamplesAcquired2;
  })(DeviceEvent)
);
var QualityReported = (
  /** @class */
  (function(_super) {
    __extends(QualityReported2, _super);
    function QualityReported2(deviceUid, quality) {
      var _this = _super.call(this, "QualityReported", deviceUid) || this;
      _this.quality = quality;
      return _this;
    }
    return QualityReported2;
  })(DeviceEvent)
);
var ErrorOccurred = (
  /** @class */
  (function(_super) {
    __extends(ErrorOccurred2, _super);
    function ErrorOccurred2(deviceUid, error) {
      var _this = _super.call(this, "ErrorOccurred", deviceUid) || this;
      _this.error = error;
      return _this;
    }
    return ErrorOccurred2;
  })(DeviceEvent)
);
var AcquisitionStarted = (
  /** @class */
  (function(_super) {
    __extends(AcquisitionStarted2, _super);
    function AcquisitionStarted2(deviceUid) {
      return _super.call(this, "AcquisitionStarted", deviceUid) || this;
    }
    return AcquisitionStarted2;
  })(DeviceEvent)
);
var AcquisitionStopped = (
  /** @class */
  (function(_super) {
    __extends(AcquisitionStopped2, _super);
    function AcquisitionStopped2(deviceUid) {
      return _super.call(this, "AcquisitionStopped", deviceUid) || this;
    }
    return AcquisitionStopped2;
  })(DeviceEvent)
);

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/reader.js
var import_core3 = __toESM(require_index_umd());

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/messages.js
var Method2;
(function(Method4) {
  Method4[Method4["EnumerateDevices"] = 1] = "EnumerateDevices";
  Method4[Method4["GetDeviceInfo"] = 2] = "GetDeviceInfo";
  Method4[Method4["StartAcquisition"] = 3] = "StartAcquisition";
  Method4[Method4["StopAcquisition"] = 4] = "StopAcquisition";
})(Method2 || (Method2 = {}));
var NotificationType2;
(function(NotificationType3) {
  NotificationType3[NotificationType3["Completed"] = 0] = "Completed";
  NotificationType3[NotificationType3["Error"] = 1] = "Error";
  NotificationType3[NotificationType3["Disconnected"] = 2] = "Disconnected";
  NotificationType3[NotificationType3["Connected"] = 3] = "Connected";
  NotificationType3[NotificationType3["Quality"] = 4] = "Quality";
  NotificationType3[NotificationType3["Stopped"] = 10] = "Stopped";
  NotificationType3[NotificationType3["Started"] = 11] = "Started";
})(NotificationType2 || (NotificationType2 = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/fingerprints/reader.js
var FingerprintReader = (
  /** @class */
  (function(_super) {
    __extends(FingerprintReader2, _super);
    function FingerprintReader2(options) {
      var _this = _super.call(this) || this;
      _this.options = options;
      _this.channel = new Channel("fingerprints", _this.options);
      _this.channel.onCommunicationError = _this.onConnectionFailed.bind(_this);
      _this.channel.onNotification = _this.processNotification.bind(_this);
      return _this;
    }
    FingerprintReader2.prototype.on = function(event, handler) {
      return this._on(event, handler);
    };
    FingerprintReader2.prototype.off = function(event, handler) {
      return this._off(event, handler);
    };
    FingerprintReader2.prototype.enumerateDevices = function() {
      return this.channel.send(new Request(new Command(Method2.EnumerateDevices))).then(function(response) {
        if (!response)
          return [];
        var deviceList = JSON.parse(import_core3.Utf8.fromBase64Url(response.Data || "{}"));
        return JSON.parse(deviceList.DeviceIDs || "[]");
      });
    };
    FingerprintReader2.prototype.getDeviceInfo = function(deviceUid) {
      return this.channel.send(new Request(new Command(Method2.GetDeviceInfo, import_core3.Base64Url.fromJSON({ DeviceID: deviceUid })))).then(function(response) {
        var deviceInfo = JSON.parse(import_core3.Utf8.fromBase64Url(response.Data || "null"));
        return deviceInfo;
      });
    };
    FingerprintReader2.prototype.startAcquisition = function(sampleFormat, deviceUid) {
      return this.channel.send(new Request(new Command(Method2.StartAcquisition, import_core3.Base64Url.fromJSON({
        DeviceID: deviceUid ? deviceUid : "00000000-0000-0000-0000-000000000000",
        SampleType: sampleFormat
      })))).then();
    };
    FingerprintReader2.prototype.stopAcquisition = function(deviceUid) {
      return this.channel.send(new Request(new Command(Method2.StopAcquisition, import_core3.Base64Url.fromJSON({
        DeviceID: deviceUid ? deviceUid : "00000000-0000-0000-0000-000000000000"
      })))).then();
    };
    FingerprintReader2.prototype.onConnectionFailed = function() {
      this.emit(new CommunicationFailed());
    };
    FingerprintReader2.prototype.processNotification = function(notification) {
      switch (notification.Event) {
        case NotificationType2.Completed:
          var completed = JSON.parse(import_core3.Utf8.fromBase64Url(notification.Data || ""));
          return this.emit(new SamplesAcquired(notification.Device, completed.SampleFormat, completed.Samples));
        case NotificationType2.Error:
          var error = JSON.parse(import_core3.Utf8.fromBase64Url(notification.Data || ""));
          return this.emit(new ErrorOccurred(notification.Device, error.uError));
        case NotificationType2.Disconnected:
          return this.emit(new DeviceDisconnected(notification.Device));
        case NotificationType2.Connected:
          return this.emit(new DeviceConnected(notification.Device));
        case NotificationType2.Quality:
          var quality = JSON.parse(import_core3.Utf8.fromBase64Url(notification.Data || ""));
          return this.emit(new QualityReported(notification.Device, quality.Quality));
        case NotificationType2.Stopped:
          return this.emit(new AcquisitionStopped(notification.Device));
        case NotificationType2.Started:
          return this.emit(new AcquisitionStarted(notification.Device));
        default:
          console.log("Unknown notification: " + notification.Event);
      }
    };
    return FingerprintReader2;
  })(
    MultiCastEventSource
    //    implements FingerprintsEventSource, DeviceEventSource, CommunicationEventSource
  )
);

// node_modules/@digitalpersona/devices/dist/es5/devices/iwa/messages.js
var Method3;
(function(Method4) {
  Method4[Method4["Init"] = 1] = "Init";
  Method4[Method4["Continue"] = 2] = "Continue";
  Method4[Method4["Term"] = 3] = "Term";
  Method4[Method4["Authenticate"] = 4] = "Authenticate";
})(Method3 || (Method3 = {}));
var MessageType2;
(function(MessageType3) {
  MessageType3[MessageType3["Response"] = 0] = "Response";
  MessageType3[MessageType3["Notification"] = 1] = "Notification";
})(MessageType2 || (MessageType2 = {}));

// node_modules/@digitalpersona/devices/dist/es5/devices/iwa/device.js
var WindowsAuthClient = (
  /** @class */
  (function(_super) {
    __extends(WindowsAuthClient2, _super);
    function WindowsAuthClient2(options) {
      var _this = _super.call(this) || this;
      _this.channel = new Channel("wia", options);
      _this.channel.onCommunicationError = _this.onConnectionFailed.bind(_this);
      return _this;
    }
    WindowsAuthClient2.prototype.on = function(event, handler) {
      return this._on(event, handler);
    };
    WindowsAuthClient2.prototype.off = function(event, handler) {
      return this._off(event, handler);
    };
    WindowsAuthClient2.prototype.init = function() {
      return this.channel.send(new Request(new Command(Method3.Init)), 3e3).then(function(response) {
        var data = JSON.parse(response.Data || "{}");
        return { handle: data.Handle, data: data.Data };
      });
    };
    WindowsAuthClient2.prototype.continue = function(handle, data) {
      return this.channel.send(new Request(new Command(Method3.Continue, JSON.stringify({ Handle: handle, Data: data })))).then(function(response) {
        var d = JSON.parse(response.Data || "{}");
        return d.Data;
      });
    };
    WindowsAuthClient2.prototype.term = function(handle) {
      return this.channel.send(new Request(new Command(Method3.Term, JSON.stringify({ Handle: handle })))).then();
    };
    WindowsAuthClient2.prototype.onConnectionFailed = function() {
      this.emit(new CommunicationFailed());
    };
    return WindowsAuthClient2;
  })(MultiCastEventSource)
);
export {
  AcquisitionStarted,
  AcquisitionStopped,
  CardAttributes,
  CardInserted,
  CardRemoved,
  CardType,
  CardsReader,
  CommunicationFailed,
  DeviceConnected,
  DeviceDisconnected,
  DeviceEvent,
  DeviceModality,
  DeviceTechnology,
  DeviceUidType,
  ErrorOccurred,
  Event,
  FingerprintReader,
  QualityCode,
  QualityReported,
  SampleFormat,
  SamplesAcquired,
  WindowsAuthClient
};
//# sourceMappingURL=@digitalpersona_devices.js.map
