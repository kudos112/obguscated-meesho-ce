const _0x285085 = _0x55f3;
function _0x4a01() {
  const _0x5061b4 = [
    ".xlsx,\x20.xls",
    "log",
    "No\x20form\x20data\x20found,\x20Please\x20Upload\x20An\x20Excel\x20file",
    "<p>",
    "tabs",
    "disabled",
    "get",
    "className",
    "createElement",
    "text/css",
    "Fill\x20the\x20Form",
    "getElementById",
    "assign",
    "storage",
    "sendMessage",
    "<h3>Form\x20Data</h3>",
    "textContent",
    "file-input",
    "addEventListener",
    "4px",
    "head",
    "mouseup",
    "1px\x20solid\x20#ccc",
    "4833360oucXnB",
    "utils",
    "15240672gTAQzf",
    "#555",
    "type",
    "16px",
    "all\x200.2s\x20ease",
    "7HHMIok",
    "query",
    "Choose\x20Excel\x20File",
    "SheetNames",
    "none",
    "Sheets",
    "file-text",
    "mousedown",
    "binary",
    "input",
    "readAsBinaryString",
    "files",
    "#ffffff",
    "10px",
    "16170190XxUKbI",
    "\x0a\x20\x20.button-active\x20{\x0a\x20\x20\x20\x20transform:\x20translateY(4px)\x20scale(0.98)\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200px\x202px\x205px\x20rgba(0,\x200,\x200,\x200.1)\x20!important;\x0a\x20\x20}\x0a",
    "formData",
    "DOMContentLoaded",
    "button",
    "innerHTML",
    "405YsWUNO",
    "label",
    "set",
    "7476bNFaAv",
    "appendChild",
    "1194747bdpCMS",
    "classList",
    "100%",
    "excelFileBtn",
    "accept",
    "8px",
    "target",
    "add",
    "flex",
    "form-details",
    "2722368iOFFRD",
    "file",
    "file-label",
    "fill_form",
    "button-active",
    "25HedEZm",
    "div",
    "Filling...",
    "</p>",
    "forEach",
    "mouseleave",
    "sheet_to_json",
    "ellipsis",
    "name",
    "35378HMohIk",
    "span",
    "pointer",
    "style",
    "remove",
  ];
  _0x4a01 = function () {
    return _0x5061b4;
  };
  return _0x4a01();
}
function _0x55f3(_0x44dc3e, _0x4843a5) {
  const _0x4a01d2 = _0x4a01();
  return (
    (_0x55f3 = function (_0x55f343, _0x52fbd4) {
      _0x55f343 = _0x55f343 - 0x89;
      let _0x41a87f = _0x4a01d2[_0x55f343];
      return _0x41a87f;
    }),
    _0x55f3(_0x44dc3e, _0x4843a5)
  );
}
(function (_0x53c2dc, _0x39596a) {
  const _0x25682a = _0x55f3,
    _0x526db3 = _0x53c2dc();
  while (!![]) {
    try {
      const _0x379fe3 =
        (parseInt(_0x25682a(0xb8)) / 0x1) * (parseInt(_0x25682a(0xc1)) / 0x2) +
        -parseInt(_0x25682a(0xa9)) / 0x3 +
        (-parseInt(_0x25682a(0xa7)) / 0x4) * (parseInt(_0x25682a(0xa4)) / 0x5) +
        parseInt(_0x25682a(0x89)) / 0x6 +
        (-parseInt(_0x25682a(0x90)) / 0x7) *
          (-parseInt(_0x25682a(0xb3)) / 0x8) +
        -parseInt(_0x25682a(0x8b)) / 0x9 +
        parseInt(_0x25682a(0x9e)) / 0xa;
      if (_0x379fe3 === _0x39596a) break;
      else _0x526db3["push"](_0x526db3["shift"]());
    } catch (_0x256a2b) {
      _0x526db3["push"](_0x526db3["shift"]());
    }
  }
})(_0x4a01, 0xeae06);
const fileInputStyles = {
    display: _0x285085(0xb1),
    alignItems: "center",
    gap: _0x285085(0xae),
    cursor: _0x285085(0xc3),
    padding: _0x285085(0xae),
    border: _0x285085(0xdc),
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    color: _0x285085(0x8c),
    marginBottom: _0x285085(0x9d),
  },
  buttonStyles = {
    padding: "8px\x2016px",
    borderRadius: _0x285085(0xd9),
    backgroundColor: "#049dde",
    color: _0x285085(0x9c),
    border: _0x285085(0x94),
    cursor: _0x285085(0xc3),
    fontSize: _0x285085(0x8e),
    fontWeight: "bold",
    width: _0x285085(0xab),
    transition: _0x285085(0x8f),
    boxShadow: "0px\x205px\x2015px\x20rgba(0,\x200,\x200,\x200.1)",
    outline: _0x285085(0x94),
  },
  fileTextStyles = {
    flex: 0x1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: _0x285085(0xbf),
  },
  fileInputHiddenStyles = { display: "none" };
function fetchFormValues() {
  const _0x268a19 = _0x285085;
  chrome[_0x268a19(0xd3)]["sync"][_0x268a19(0xcc)](
    _0x268a19(0xa0),
    function (_0x2bc633) {
      const _0x1439da = _0x268a19,
        _0x1a5d9c = _0x2bc633[_0x1439da(0xa0)] || null,
        _0x4c161b = document[_0x1439da(0xd1)](_0x1439da(0xb2));
      if (_0x1a5d9c) {
        let _0x16ed32 = "";
        _0x16ed32 += _0x1439da(0xd5);
        for (let _0x55fe88 in _0x1a5d9c) {
          _0x1a5d9c["hasOwnProperty"](_0x55fe88) &&
            (_0x16ed32 +=
              _0x1439da(0xc9) +
              _0x55fe88 +
              ":\x20" +
              _0x1a5d9c[_0x55fe88] +
              _0x1439da(0xbb));
        }
        _0x4c161b[_0x1439da(0xa3)] = _0x16ed32;
      } else _0x4c161b["textContent"] = _0x1439da(0xc8);
    }
  );
}
function handleFileChange(_0x50ecad) {
  const _0x42a932 = _0x285085;
  _0x50ecad["preventDefault"]();
  const _0x45c49a = _0x50ecad["target"][_0x42a932(0x9b)][0x0];
  if (_0x45c49a) {
    const _0x25debe = new FileReader();
    (_0x25debe["onload"] = function (_0x592c80) {
      const _0x16fb3a = _0x42a932,
        _0x5a2b30 = _0x592c80[_0x16fb3a(0xaf)]["result"],
        _0x1db928 = XLSX["read"](_0x5a2b30, { type: _0x16fb3a(0x98) }),
        _0x2657e5 = _0x1db928[_0x16fb3a(0x93)][0x0],
        _0x277ec1 = _0x1db928[_0x16fb3a(0x95)][_0x2657e5],
        _0x1da698 = XLSX[_0x16fb3a(0x8a)][_0x16fb3a(0xbe)](_0x277ec1, {
          header: 0x1,
          defval: "",
        }),
        _0x186f00 = {};
      _0x1da698[_0x16fb3a(0xbc)]((_0x1935a8) => {
        _0x186f00[_0x1935a8[0x0]] = _0x1935a8[0x1];
      }),
        chrome[_0x16fb3a(0xd3)]["sync"][_0x16fb3a(0xa6)]({
          formData: _0x186f00,
        }),
        fetchFormValues();
    }),
      _0x25debe[_0x42a932(0x9a)](_0x45c49a);
  }
}
function fillForm(_0x982fac) {
  const _0x48858e = _0x285085;
  (_0x982fac[_0x48858e(0xd6)] = _0x48858e(0xba)),
    (_0x982fac[_0x48858e(0xcb)] = !![]),
    chrome[_0x48858e(0xca)][_0x48858e(0x91)](
      { active: !![], currentWindow: !![] },
      function (_0x5f7db1) {
        const _0x4b2c1a = _0x48858e,
          _0x3979fa = _0x5f7db1[0x0];
        _0x3979fa["id"] &&
          chrome["tabs"][_0x4b2c1a(0xd4)](
            _0x3979fa["id"],
            { event: _0x4b2c1a(0xb6), tabId: _0x3979fa["id"] },
            (_0x22b5d5) => {
              const _0x43d713 = _0x4b2c1a;
              (_0x982fac[_0x43d713(0xd6)] = _0x43d713(0xd0)),
                (_0x982fac["disabled"] = ![]),
                console[_0x43d713(0xc7)]("result\x20message:", _0x22b5d5);
            }
          );
      }
    );
}
const styleSheet = document[_0x285085(0xce)](_0x285085(0xc4));
(styleSheet[_0x285085(0x8d)] = _0x285085(0xcf)),
  (styleSheet["innerText"] = _0x285085(0x9f)),
  document[_0x285085(0xda)]["appendChild"](styleSheet),
  document[_0x285085(0xd8)](_0x285085(0xa1), function () {
    const _0x1ed3cd = _0x285085;
    fetchFormValues();
    const _0x3b9edb = document[_0x1ed3cd(0xce)](_0x1ed3cd(0xb9));
    (_0x3b9edb["id"] = "form-details"),
      (_0x3b9edb["style"]["color"] = _0x1ed3cd(0x8c));
    const _0x40fd28 = document["createElement"](_0x1ed3cd(0xa5));
    (_0x40fd28["htmlFor"] = _0x1ed3cd(0xac)),
      (_0x40fd28["className"] = _0x1ed3cd(0xb5)),
      Object[_0x1ed3cd(0xd2)](_0x40fd28[_0x1ed3cd(0xc4)], fileInputStyles);
    const _0x594f89 = document[_0x1ed3cd(0xce)](_0x1ed3cd(0xc2));
    (_0x594f89["className"] = _0x1ed3cd(0x96)),
      Object[_0x1ed3cd(0xd2)](_0x594f89["style"], fileTextStyles),
      (_0x594f89[_0x1ed3cd(0xd6)] = _0x1ed3cd(0x92));
    const _0x5c32c4 = document[_0x1ed3cd(0xce)](_0x1ed3cd(0x99));
    (_0x5c32c4[_0x1ed3cd(0x8d)] = _0x1ed3cd(0xb4)),
      (_0x5c32c4[_0x1ed3cd(0xc0)] = "excelFile"),
      (_0x5c32c4["id"] = _0x1ed3cd(0xac)),
      (_0x5c32c4[_0x1ed3cd(0xad)] = _0x1ed3cd(0xc6)),
      (_0x5c32c4[_0x1ed3cd(0xcd)] = _0x1ed3cd(0xd7)),
      Object["assign"](_0x5c32c4["style"], fileInputHiddenStyles),
      _0x5c32c4[_0x1ed3cd(0xd8)]("change", handleFileChange),
      _0x40fd28["appendChild"](_0x594f89),
      _0x40fd28["appendChild"](_0x5c32c4);
    const _0x36fe06 = document[_0x1ed3cd(0xce)](_0x1ed3cd(0xa2));
    (_0x36fe06[_0x1ed3cd(0xd6)] = _0x1ed3cd(0xd0)),
      _0x36fe06[_0x1ed3cd(0xd8)](_0x1ed3cd(0x97), () => {
        const _0x4b5582 = _0x1ed3cd;
        _0x36fe06[_0x4b5582(0xaa)][_0x4b5582(0xb0)](_0x4b5582(0xb7));
      }),
      _0x36fe06[_0x1ed3cd(0xd8)](_0x1ed3cd(0xdb), () => {
        const _0x17d2ee = _0x1ed3cd;
        _0x36fe06[_0x17d2ee(0xaa)][_0x17d2ee(0xc5)](_0x17d2ee(0xb7));
      }),
      _0x36fe06["addEventListener"](_0x1ed3cd(0xbd), () => {
        const _0x139cc5 = _0x1ed3cd;
        _0x36fe06[_0x139cc5(0xaa)][_0x139cc5(0xc5)]("button-active");
      }),
      _0x36fe06[_0x1ed3cd(0xd8)]("click", () => fillForm(_0x36fe06)),
      Object[_0x1ed3cd(0xd2)](_0x36fe06[_0x1ed3cd(0xc4)], buttonStyles);
    const _0x57114b = document[_0x1ed3cd(0xd1)]("popup-content");
    _0x57114b["appendChild"](_0x40fd28),
      _0x57114b["appendChild"](_0x36fe06),
      _0x57114b[_0x1ed3cd(0xa8)](_0x3b9edb);
  });
