import {
  __commonJS,
  __toESM
} from "./chunk-B4NDS4B7.js";

// node_modules/@digitalpersona/core/dist/es5.bundles/index.umd.js
var require_index_umd = __commonJS({
  "node_modules/@digitalpersona/core/dist/es5.bundles/index.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory((global.dp = global.dp || {}, global.dp.core = global.dp.core || {})));
    })(exports, function(exports2) {
      "use strict";
      var Url = (
        /** @class */
        (function() {
          function Url2(base, path, query) {
            this.href = Url2.create(base, path, query);
          }
          Url2.getSanitizedQuery = function(query) {
            return Object.keys(query).map(function(key) {
              return [key, query[key]].map(encodeURIComponent).join("=");
            }).join("&");
          };
          Url2.create = function(base, path, query) {
            return base + (path ? "/" + encodeURI(path) : "") + (query ? "?" + Url2.getSanitizedQuery(query) : "");
          };
          return Url2;
        })()
      );
      (function(BioFactor) {
        BioFactor[BioFactor["Multiple"] = 1] = "Multiple";
        BioFactor[BioFactor["FacialFeatures"] = 2] = "FacialFeatures";
        BioFactor[BioFactor["Voice"] = 4] = "Voice";
        BioFactor[BioFactor["Fingerprint"] = 8] = "Fingerprint";
        BioFactor[BioFactor["Iris"] = 16] = "Iris";
        BioFactor[BioFactor["Retina"] = 32] = "Retina";
        BioFactor[BioFactor["HandGeometry"] = 64] = "HandGeometry";
        BioFactor[BioFactor["SignatureDynamics"] = 128] = "SignatureDynamics";
        BioFactor[BioFactor["KeystrokeDynamics"] = 256] = "KeystrokeDynamics";
        BioFactor[BioFactor["LipMovement"] = 512] = "LipMovement";
        BioFactor[BioFactor["ThermalFaceImage"] = 1024] = "ThermalFaceImage";
        BioFactor[BioFactor["ThermalHandImage"] = 2048] = "ThermalHandImage";
        BioFactor[BioFactor["Gait"] = 4096] = "Gait";
      })(exports2.BioFactor || (exports2.BioFactor = {}));
      (function(BioSampleFormatOwner) {
        BioSampleFormatOwner[BioSampleFormatOwner["None"] = 0] = "None";
        BioSampleFormatOwner[BioSampleFormatOwner["Neurotechnologija"] = 49] = "Neurotechnologija";
        BioSampleFormatOwner[BioSampleFormatOwner["DigitalPersona"] = 51] = "DigitalPersona";
        BioSampleFormatOwner[BioSampleFormatOwner["Cognitec"] = 99] = "Cognitec";
        BioSampleFormatOwner[BioSampleFormatOwner["Innovatrics"] = 53] = "Innovatrics";
      })(exports2.BioSampleFormatOwner || (exports2.BioSampleFormatOwner = {}));
      var BioSampleFormat = (
        /** @class */
        /* @__PURE__ */ (function() {
          function BioSampleFormat2(FormatOwner, FormatID) {
            this.FormatOwner = FormatOwner;
            this.FormatID = FormatID;
          }
          return BioSampleFormat2;
        })()
      );
      (function(BioSampleType) {
        BioSampleType[BioSampleType["Raw"] = 1] = "Raw";
        BioSampleType[BioSampleType["Intermediate"] = 2] = "Intermediate";
        BioSampleType[BioSampleType["Processed"] = 4] = "Processed";
        BioSampleType[BioSampleType["RawWSQCompressed"] = 8] = "RawWSQCompressed";
        BioSampleType[BioSampleType["Encrypted"] = 16] = "Encrypted";
        BioSampleType[BioSampleType["Signed"] = 32] = "Signed";
      })(exports2.BioSampleType || (exports2.BioSampleType = {}));
      (function(BioSamplePurpose) {
        BioSamplePurpose[BioSamplePurpose["Any"] = 0] = "Any";
        BioSamplePurpose[BioSamplePurpose["Verify"] = 1] = "Verify";
        BioSamplePurpose[BioSamplePurpose["Identify"] = 2] = "Identify";
        BioSamplePurpose[BioSamplePurpose["Enroll"] = 3] = "Enroll";
        BioSamplePurpose[BioSamplePurpose["EnrollForVerificationOnly"] = 4] = "EnrollForVerificationOnly";
        BioSamplePurpose[BioSamplePurpose["EnrollForIdentificationOnly"] = 5] = "EnrollForIdentificationOnly";
        BioSamplePurpose[BioSamplePurpose["Audit"] = 6] = "Audit";
      })(exports2.BioSamplePurpose || (exports2.BioSamplePurpose = {}));
      (function(BioSampleEncryption) {
        BioSampleEncryption[BioSampleEncryption["None"] = 0] = "None";
        BioSampleEncryption[BioSampleEncryption["XTEA"] = 1] = "XTEA";
      })(exports2.BioSampleEncryption || (exports2.BioSampleEncryption = {}));
      var BioSampleHeader = (
        /** @class */
        /* @__PURE__ */ (function() {
          function BioSampleHeader2(Factor, Format, Type, Purpose, Quality, Encryption) {
            this.Factor = Factor;
            this.Format = Format;
            this.Type = Type;
            this.Purpose = Purpose;
            this.Quality = Quality;
            this.Encryption = Encryption;
          }
          return BioSampleHeader2;
        })()
      );
      var BioSample = (
        /** @class */
        /* @__PURE__ */ (function() {
          function BioSample2(Header, Data) {
            this.Header = Header;
            this.Data = Data;
            this.Version = 1;
          }
          return BioSample2;
        })()
      );
      var __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }
      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      }
      var Utf162 = (
        /** @class */
        (function() {
          function Utf163() {
          }
          Utf163.fromUtf8 = function(s) {
            return decodeURIComponent(escape(Utf84.noBom(s)));
          };
          Utf163.fromBase64 = function(s) {
            return Utf163.fromUtf8(Utf84.fromBase64(s));
          };
          Utf163.fromBase64Url = function(s) {
            return Utf163.fromUtf8(Utf84.fromBase64Url(s));
          };
          Utf163.withBom = function(s) {
            return "\uFEFF" + s;
          };
          Utf163.noBom = function(s) {
            return s.replace(/^\uFEFF/, "");
          };
          return Utf163;
        })()
      );
      var Utf84 = (
        /** @class */
        (function() {
          function Utf85() {
          }
          Utf85.fromUtf16 = function(s) {
            return unescape(encodeURIComponent(Utf162.noBom(s)));
          };
          Utf85.fromBase64 = function(s) {
            return atob(s);
          };
          Utf85.fromBase64Url = function(s) {
            return Utf85.fromBase64(Base642.fromBase64Url(s));
          };
          Utf85.fromBytes = function(bytes) {
            return String.fromCharCode.apply(String, __spread(bytes));
          };
          Utf85.withBom = function(s) {
            return "ï»¿" + s;
          };
          Utf85.noBom = function(s) {
            return s.replace(/^\xEF\xBB\xBF/, "");
          };
          return Utf85;
        })()
      );
      var Base642 = (
        /** @class */
        (function() {
          function Base643() {
          }
          Base643.fromUtf8 = function(s) {
            return btoa(s);
          };
          Base643.fromUtf16 = function(s) {
            return Base643.fromUtf8(Utf84.fromUtf16(s));
          };
          Base643.fromBase64Url = function(s) {
            return (s.length % 4 === 2 ? s + "==" : s.length % 4 === 3 ? s + "=" : s).replace(/-/g, "+").replace(/_/g, "/");
          };
          Base643.fromBytes = function(bytes) {
            return Base643.fromUtf8(Utf84.fromBytes(bytes));
          };
          Base643.fromJSON = function(obj) {
            return Base643.fromUtf16(JSON.stringify(obj));
          };
          return Base643;
        })()
      );
      var Base64Url4 = (
        /** @class */
        (function() {
          function Base64Url5() {
          }
          Base64Url5.fromBase64 = function(s) {
            return s.replace(/\=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
          };
          Base64Url5.fromUtf8 = function(s) {
            return Base64Url5.fromBase64(Base642.fromUtf8(s));
          };
          Base64Url5.fromUtf16 = function(s) {
            return Base64Url5.fromBase64(Base642.fromUtf16(s));
          };
          Base64Url5.fromBytes = function(bytes) {
            return Base64Url5.fromUtf8(Utf84.fromBytes(bytes));
          };
          Base64Url5.fromJSON = function(obj) {
            return Base64Url5.fromUtf16(JSON.stringify(obj));
          };
          return Base64Url5;
        })()
      );
      var Base32 = (
        /** @class */
        (function() {
          function Base322() {
          }
          Base322.fromBytes = function(bytes) {
            var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            var v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, str = "", l = bytes.length, i = 0;
            var count = Math.floor(l / 5) * 5;
            while (i < count) {
              v1 = bytes[i++];
              v2 = bytes[i++];
              v3 = bytes[i++];
              v4 = bytes[i++];
              v5 = bytes[i++];
              str += digits[v1 >>> 3] + digits[(v1 << 2 | v2 >>> 6) & 31] + digits[v2 >>> 1 & 31] + digits[(v2 << 4 | v3 >>> 4) & 31] + digits[(v3 << 1 | v4 >>> 7) & 31] + digits[v4 >>> 2 & 31] + digits[(v4 << 3 | v5 >>> 5) & 31] + digits[v5 & 31];
            }
            var remain = l - count;
            if (remain === 0)
              return str;
            switch (remain) {
              // @ts-ignore no-switch-case-fall-through
              case 4:
                v4 = bytes[--l];
              // @ts-ignore no-switch-case-fall-through
              case 3:
                v3 = bytes[--l];
              // @ts-ignore no-switch-case-fall-through
              case 2:
                v2 = bytes[--l];
              // @ts-ignore no-switch-case-fall-through
              case 1:
                v1 = bytes[--l];
            }
            str += digits[v1 >>> 3];
            switch (remain) {
              case 1:
                return str + digits[v1 << 2 & 31] + "======";
              case 2:
                return str + digits[(v1 << 2 | v2 >>> 6) & 31] + digits[v2 >>> 1 & 31] + digits[v2 << 4 & 31] + "====";
              case 3:
                return str + digits[(v1 << 2 | v2 >>> 6) & 31] + digits[v2 >>> 1 & 31] + digits[(v2 << 4 | v3 >>> 4) & 31] + digits[v3 << 1 & 31] + "===";
              case 4:
                return str + digits[(v1 << 2 | v2 >>> 6) & 31] + digits[v2 >>> 1 & 31] + digits[(v2 << 4 | v3 >>> 4) & 31] + digits[(v3 << 1 | v4 >>> 7) & 31] + digits[v4 >>> 2 & 31] + digits[v4 << 3 & 31] + "=";
            }
            return str;
          };
          return Base322;
        })()
      );
      (function(UserNameType) {
        UserNameType[UserNameType["Unknown"] = 0] = "Unknown";
        UserNameType[UserNameType["NetBIOSDomain"] = 1] = "NetBIOSDomain";
        UserNameType[UserNameType["DNSDomain"] = 2] = "DNSDomain";
        UserNameType[UserNameType["SAM"] = 3] = "SAM";
        UserNameType[UserNameType["Simple"] = 4] = "Simple";
        UserNameType[UserNameType["UID"] = 5] = "UID";
        UserNameType[UserNameType["UPN"] = 6] = "UPN";
        UserNameType[UserNameType["Display"] = 7] = "Display";
        UserNameType[UserNameType["SID"] = 8] = "SID";
        UserNameType[UserNameType["DP"] = 9] = "DP";
      })(exports2.UserNameType || (exports2.UserNameType = {}));
      var User = (
        /** @class */
        (function() {
          function User2(name, type) {
            var reGUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
            this.name = name || "";
            this.type = type || (this.name.length === 0 ? exports2.UserNameType.Unknown : this.name === "*" ? exports2.UserNameType.Unknown : this.name.indexOf("@") !== -1 ? exports2.UserNameType.UPN : this.name.indexOf("\\") !== -1 ? exports2.UserNameType.SAM : reGUID.test(this.name) ? exports2.UserNameType.UID : exports2.UserNameType.DP);
          }
          User2.prototype.isAnonymous = function() {
            return !this.name || this.name.length === 0;
          };
          User2.prototype.isEveryone = function() {
            return this.name === "*";
          };
          User2.Anonymous = function() {
            return new User2("", exports2.UserNameType.Unknown);
          };
          User2.Everyone = function() {
            return new User2("*", exports2.UserNameType.Unknown);
          };
          User2.fromJWT = function(token, type) {
            var claims = JWT.claims(token);
            var user = claims.sub && claims.sub instanceof User2 ? claims.sub : claims.wan ? new User2(claims.wan, type) : claims.sub ? new User2(claims.sub, type || exports2.UserNameType.DP) : User2.Anonymous();
            return user;
          };
          return User2;
        })()
      );
      var JWTHeader = (
        /** @class */
        /* @__PURE__ */ (function() {
          function JWTHeader2(typ, alg, cty) {
            this.typ = typ;
            this.cty = cty;
            this.alg = alg;
          }
          return JWTHeader2;
        })()
      );
      var JWT = (
        /** @class */
        (function() {
          function JWT2() {
          }
          JWT2.claims = function(jwt) {
            var parts = jwt.split(".");
            var header = JSON.parse(Utf162.fromBase64Url(parts[0]));
            if (header.cty === "JWT") {
              return __assign(__assign({}, header), new JWTHeader());
            } else {
              var payload = JSON.parse(Utf162.fromBase64Url(parts[1]));
              if (typeof payload.sub === "object") {
                var _a = payload.sub, name_1 = _a.name, type = _a.type;
                payload.sub = new User(name_1, type);
              }
              return payload;
            }
          };
          JWT2.errors = function(jwt) {
            var e = [];
            var claims = JWT2.claims(jwt);
            var now = (/* @__PURE__ */ new Date()).getTime() / 1e3;
            if (claims.iat && claims.nbf && claims.iat > claims.nbf)
              e.push(new Error("JWT.Error.IssueTimeLaterThanNotBefore"));
            if (claims.nbf && claims.nbf > now)
              e.push(new Error("JWT.Error.NotEffectiveYet"));
            if (claims.exp && claims.exp <= now)
              e.push(new Error("JWT.Error.Expired"));
            return e.length > 0 ? e : null;
          };
          return JWT2;
        })()
      );
      (function(ClaimName) {
        ClaimName["TokensId"] = "jti";
        ClaimName["IssuerName"] = "iss";
        ClaimName["IssuedAt"] = "iat";
        ClaimName["Audience"] = "aud";
        ClaimName["NotBefore"] = "nbf";
        ClaimName["ExpiresAfter"] = "exp";
        ClaimName["SubjectName"] = "sub";
        ClaimName["IssuerDomain"] = "dom";
        ClaimName["SubjectUid"] = "uid";
        ClaimName["ADGuid"] = "ad_guid";
        ClaimName["CredentialsUsed"] = "crd";
        ClaimName["Group"] = "group";
        ClaimName["Role"] = "role";
        ClaimName["WindowsAccountName"] = "wan";
        ClaimName["T24Principal"] = "t24";
      })(exports2.ClaimName || (exports2.ClaimName = {}));
      var Ticket = (
        /** @class */
        (function() {
          function Ticket2(jwt) {
            this.jwt = jwt;
          }
          Ticket2.None = function() {
            return new Ticket2("");
          };
          return Ticket2;
        })()
      );
      var Credential = (
        /** @class */
        (function() {
          function Credential2(id, data, encode) {
            if (encode === void 0) {
              encode = true;
            }
            this.id = id;
            this.data = !data ? null : !encode ? JSON.stringify(data) : Base64Url4.fromUtf16(typeof data !== "string" ? JSON.stringify(data) : data);
          }
          Credential2.None = function() {
            return new Credential2("");
          };
          Credential2.Any = function() {
            return new Credential2("*");
          };
          Credential2.Password = "D1A1F561-E14A-4699-9138-2EB523E132CC";
          Credential2.Fingerprints = "AC184A13-60AB-40E5-A514-E10F777EC2F9";
          Credential2.Face = "85AEAA44-413B-4DC1-AF09-ADE15892730A";
          Credential2.SmartCard = "D66CC98D-4153-4987-8EBE-FB46E848EA98";
          Credential2.ContactlessCard = "F674862D-AC70-48CA-B73E-64A22F3BAC44";
          Credential2.ProximityCard = "1F31360C-81C0-4EE0-9ACD-5A4400F66CC2";
          Credential2.PIN = "8A6FCEC3-3C8A-40C2-8AC0-A039EC01BA05";
          Credential2.SecurityQuestions = "B49E99C6-6C94-42DE-ACD7-FD6B415DF503";
          Credential2.Bluetooth = "E750A180-577B-47F7-ACD9-F89A7E27FA49";
          Credential2.OneTimePassword = "324C38BD-0B51-4E4D-BD75-200DA0C8177F";
          Credential2.U2F = "5D5F73AF-BCE5-4161-9584-42A61AED0E48";
          Credential2.IWA = "AE922666-9667-49BC-97DA-1EB0E1EF73D2";
          Credential2.Email = "7845D71D-AB67-4EA7-913C-F81E75C3A087";
          Credential2.Behavior = "193C41F6-5CF6-4525-84CC-223603DAC9AB";
          Credential2.Cards = "FCFA704C-144B-42DB-8DF3-13F5CD20C525";
          return Credential2;
        })()
      );
      (function(FingerPosition) {
        FingerPosition[FingerPosition["Unknown"] = 0] = "Unknown";
        FingerPosition[FingerPosition["RightThumb"] = 1] = "RightThumb";
        FingerPosition[FingerPosition["RightIndex"] = 2] = "RightIndex";
        FingerPosition[FingerPosition["RightMiddle"] = 3] = "RightMiddle";
        FingerPosition[FingerPosition["RightRing"] = 4] = "RightRing";
        FingerPosition[FingerPosition["RightLittle"] = 5] = "RightLittle";
        FingerPosition[FingerPosition["LeftThumb"] = 6] = "LeftThumb";
        FingerPosition[FingerPosition["LeftIndex"] = 7] = "LeftIndex";
        FingerPosition[FingerPosition["LeftMiddle"] = 8] = "LeftMiddle";
        FingerPosition[FingerPosition["LeftRing"] = 9] = "LeftRing";
        FingerPosition[FingerPosition["LeftLittle"] = 10] = "LeftLittle";
      })(exports2.FingerPosition || (exports2.FingerPosition = {}));
      var Finger = (
        /** @class */
        (function() {
          function Finger2(position) {
            this.position = position;
          }
          Finger2.fromJson = function(json) {
            var obj = json;
            return new Finger2(obj.position);
          };
          return Finger2;
        })()
      );
      (function(FaceImageType) {
        FaceImageType[FaceImageType["Jpeg"] = 1] = "Jpeg";
      })(exports2.FaceImageType || (exports2.FaceImageType = {}));
      var FaceImage = (
        /** @class */
        (function() {
          function FaceImage2(ImageData, ImageType) {
            if (ImageType === void 0) {
              ImageType = exports2.FaceImageType.Jpeg;
            }
            this.ImageData = ImageData;
            this.ImageType = ImageType;
            this.Version = 1;
          }
          FaceImage2.fromDataURL = function(image) {
            return new FaceImage2(image.replace("data:image/jpeg;base64,", ""));
          };
          FaceImage2.fromCanvas = function(canvas, quality) {
            if (quality === void 0) {
              quality = 1;
            }
            return FaceImage2.fromDataURL(canvas.toDataURL("image/jpeg", quality));
          };
          FaceImage2.prototype.toBioSample = function(format, purpose, sdkVersion) {
            if (format === void 0) {
              format = new BioSampleFormat(exports2.BioSampleFormatOwner.None, 0);
            }
            if (purpose === void 0) {
              purpose = exports2.BioSamplePurpose.Any;
            }
            return new BioSample(new BioSampleHeader(exports2.BioFactor.FacialFeatures, format, exports2.BioSampleType.Raw, purpose, -1, exports2.BioSampleEncryption.None), Base64Url4.fromJSON(this));
          };
          return FaceImage2;
        })()
      );
      (function(QuestionType) {
        QuestionType[QuestionType["Regular"] = 0] = "Regular";
        QuestionType[QuestionType["Custom"] = 1] = "Custom";
      })(exports2.QuestionType || (exports2.QuestionType = {}));
      var Question = (
        /** @class */
        (function() {
          function Question2(number, lang_id, sublang_id, keyboard_layout, text) {
            this.number = number;
            this.lang_id = lang_id;
            this.sublang_id = sublang_id;
            this.keyboard_layout = keyboard_layout;
            this.text = text;
            this.version = 1;
            this.type = number <= 100 ? exports2.QuestionType.Regular : exports2.QuestionType.Custom;
            if (this.type === exports2.QuestionType.Custom && !text)
              throw new Error("Question text is required for custom questions");
          }
          Question2.fromJson = function(json) {
            var obj = json;
            return new Question2(obj.number, obj.lang_id, obj.sublang_id, obj.keyboard_layout, obj.text);
          };
          return Question2;
        })()
      );
      var Answer = (
        /** @class */
        /* @__PURE__ */ (function() {
          function Answer2(question, text) {
            this.text = text;
            this.number = question instanceof Question ? question.number : question;
          }
          return Answer2;
        })()
      );
      exports2.Answer = Answer;
      exports2.Base32 = Base32;
      exports2.Base64 = Base642;
      exports2.Base64Url = Base64Url4;
      exports2.BioSample = BioSample;
      exports2.BioSampleFormat = BioSampleFormat;
      exports2.BioSampleHeader = BioSampleHeader;
      exports2.Credential = Credential;
      exports2.FaceImage = FaceImage;
      exports2.Finger = Finger;
      exports2.JWT = JWT;
      exports2.Question = Question;
      exports2.Ticket = Ticket;
      exports2.Url = Url;
      exports2.User = User;
      exports2.Utf16 = Utf162;
      exports2.Utf8 = Utf84;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
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
