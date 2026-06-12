import {
  __commonJS
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
      var Utf16 = (
        /** @class */
        (function() {
          function Utf162() {
          }
          Utf162.fromUtf8 = function(s) {
            return decodeURIComponent(escape(Utf8.noBom(s)));
          };
          Utf162.fromBase64 = function(s) {
            return Utf162.fromUtf8(Utf8.fromBase64(s));
          };
          Utf162.fromBase64Url = function(s) {
            return Utf162.fromUtf8(Utf8.fromBase64Url(s));
          };
          Utf162.withBom = function(s) {
            return "\uFEFF" + s;
          };
          Utf162.noBom = function(s) {
            return s.replace(/^\uFEFF/, "");
          };
          return Utf162;
        })()
      );
      var Utf8 = (
        /** @class */
        (function() {
          function Utf82() {
          }
          Utf82.fromUtf16 = function(s) {
            return unescape(encodeURIComponent(Utf16.noBom(s)));
          };
          Utf82.fromBase64 = function(s) {
            return atob(s);
          };
          Utf82.fromBase64Url = function(s) {
            return Utf82.fromBase64(Base64.fromBase64Url(s));
          };
          Utf82.fromBytes = function(bytes) {
            return String.fromCharCode.apply(String, __spread(bytes));
          };
          Utf82.withBom = function(s) {
            return "ï»¿" + s;
          };
          Utf82.noBom = function(s) {
            return s.replace(/^\xEF\xBB\xBF/, "");
          };
          return Utf82;
        })()
      );
      var Base64 = (
        /** @class */
        (function() {
          function Base642() {
          }
          Base642.fromUtf8 = function(s) {
            return btoa(s);
          };
          Base642.fromUtf16 = function(s) {
            return Base642.fromUtf8(Utf8.fromUtf16(s));
          };
          Base642.fromBase64Url = function(s) {
            return (s.length % 4 === 2 ? s + "==" : s.length % 4 === 3 ? s + "=" : s).replace(/-/g, "+").replace(/_/g, "/");
          };
          Base642.fromBytes = function(bytes) {
            return Base642.fromUtf8(Utf8.fromBytes(bytes));
          };
          Base642.fromJSON = function(obj) {
            return Base642.fromUtf16(JSON.stringify(obj));
          };
          return Base642;
        })()
      );
      var Base64Url = (
        /** @class */
        (function() {
          function Base64Url2() {
          }
          Base64Url2.fromBase64 = function(s) {
            return s.replace(/\=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
          };
          Base64Url2.fromUtf8 = function(s) {
            return Base64Url2.fromBase64(Base64.fromUtf8(s));
          };
          Base64Url2.fromUtf16 = function(s) {
            return Base64Url2.fromBase64(Base64.fromUtf16(s));
          };
          Base64Url2.fromBytes = function(bytes) {
            return Base64Url2.fromUtf8(Utf8.fromBytes(bytes));
          };
          Base64Url2.fromJSON = function(obj) {
            return Base64Url2.fromUtf16(JSON.stringify(obj));
          };
          return Base64Url2;
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
            var header = JSON.parse(Utf16.fromBase64Url(parts[0]));
            if (header.cty === "JWT") {
              return __assign(__assign({}, header), new JWTHeader());
            } else {
              var payload = JSON.parse(Utf16.fromBase64Url(parts[1]));
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
            this.data = !data ? null : !encode ? JSON.stringify(data) : Base64Url.fromUtf16(typeof data !== "string" ? JSON.stringify(data) : data);
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
            return new BioSample(new BioSampleHeader(exports2.BioFactor.FacialFeatures, format, exports2.BioSampleType.Raw, purpose, -1, exports2.BioSampleEncryption.None), Base64Url.fromJSON(this));
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
      exports2.Base64 = Base64;
      exports2.Base64Url = Base64Url;
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
      exports2.Utf16 = Utf16;
      exports2.Utf8 = Utf8;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

export {
  require_index_umd
};
//# sourceMappingURL=chunk-INH2SPXL.js.map
