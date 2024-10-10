import GenitalsFemale from '../SVGComponents/GenitalsFemale';

const genitalsFemaleMapParts = {
  'right-perineum': {
    shape: 'poly',
    points:
      '189,265,182,257,176,248,170,238,165,229,161,219,159,\n  208,158,204,157,200,157,195,156,190,156,184,156,179,156,168,156,157,157,149,157,\n  149,158,148,158,146,158,144,159,142,159,140,160,137,160,135,160,133,161,131,161,\n  130,161,130,161,130,161,129,161,127,162,125,162,122,163,120,163,117,164,114,164,\n  112,164,110,165,109,165,109,165,109,165,106,166,103,167,100,168,97,168,97,168,95,\n  169,91,170,88,171,84,172,81,173,79,174,78,178,77,182,75,186,73,190,72,192,71,200,\n  68,208,65,216,63,224,60,232,58,241,58,241,58,241,60,241,62,241,64,241,68,241,71,\n  241,79,241,87,241,91,241,91,241,93,241,95,241,98,241,101,241,104,241,107,241,111,\n  241,113,241,115,241,117,241,117,237,118,235,121,233,123,231,125,229,128,227,131,\n  227,131,225,132,224,133,223,134,221,135,221,135,221,135,221,136,220,137,219,139,\n  217,140,216,142,214,144,213,146,212,147,211,148,210,149,210,149,210,149,210,151,\n  209,153,208,154,207,156,207,156,207,156,206,158,205,159,204,161,203,162,203,162,\n  200,168,198,174,197,181,196,188,196,195,198,201,199,205,202,209,206,213,209,217,\n  213,221,216,224,216,224,218,226,219,228,221,231,223,233,223,233,225,235,229,238,\n  233,241,237,243,241,245,244,246,244,246,244,247,244,249,244,251,244,254,244,257,\n  245,259,245,262,245,264,245,266,245,267,245,267,245,268,245,269,245,270,245,272,\n  245,273,244,273,243,275,242,275,240,276,239,277,237,277,235,279,232,281,230,283,\n  229,285,228,287,227,290,226,293,219,292,212,287,206,282,199,276,193,270,189,265',
    alt: 'right-perineum',
    name: 'right-perineum',
  },
  'left-perineum': {
    shape: 'poly',
    points:
      '298,69,300,70,303,71,306,72,309,74,312,75,314,76,315,\n  78,317,81,317,84,318,87,319,91,319,93,319,93,320,94,320,96,320,98,321,101,322,103,\n  322,106,323,108,323,110,323,112,324,113,324,113,327,132,330,148,331,164,331,172,\n  331,180,330,188,330,197,328,205,326,215,326,215,325,218,324,221,323,223,323,226,\n  323,226,321,230,319,234,316,239,314,243,310,248,307,253,304,257,301,262,297,266,\n  294,270,291,274,288,277,285,280,282,284,279,287,275,290,271,293,267,293,266,290,\n  265,286,263,284,262,281,259,279,256,277,254,276,253,276,251,275,250,275,249,274,\n  248,273,247,272,247,268,247,263,247,259,247,254,247,252,247,249,247,247,247,246,\n  248,245,248,244,249,243,250,243,252,242,254,241,256,240,258,238,262,235,266,233,\n  271,228,275,224,280,219,284,215,287,211,290,206,292,199,293,191,294,184,294,177,\n  291,171,290,169,289,167,288,165,287,164,285,162,284,160,280,154,278,150,275,147,\n  272,143,269,140,264,135,261,132,258,128,254,125,251,121,247,118,243,117,243,117,\n  243,116,243,114,243,113,243,111,243,108,243,102,243,95,243,88,243,80,243,73,243,\n  67,243,64,243,62,243,61,243,59,243,58,243,58,252,58,262,59,271,61,280,63,289,65,\n  298,69',
    alt: 'left-perineum',
    name: 'left-perineum',
  },
  vulva: {
    shape: 'poly',
    points:
      '226,186,226,188,226,189,226,191,227,193,227,194,228,\n  196,229,197,229,198,230,199,231,200,232,201,233,202,237,205,241,206,246,205,250,\n  204,254,202,257,198,259,194,259,191,260,189,260,188,261,187,262,187,263,186,265,\n  186,268,186,268,186,269,186,271,186,273,186,275,186,278,186,280,186,282,186,284,\n  186,286,186,287,186,287,186,287,191,286,196,285,200,283,204,281,208,279,211,274,\n  217,268,223,260,229,258,231,255,234,252,236,248,238,245,240,242,240,238,240,236,\n  237,233,235,230,232,227,230,222,229,222,228,222,227,222,226,222,226,222,225,221,\n  224,221,222,218,219,215,215,211,212,208,208,206,206,204,203,203,200,202,196,202,\n  193,201,190,201,186,201,186,203,186,205,186,207,186,210,186,214,186,217,186,220,\n  186,222,186,224,186,226,186,226,186',
    alt: 'vulva',
    name: 'vulva',
    linkedWith: ['vulva-1', 'vulva-2'],
  },
  'vulva-1': {
    shape: 'poly',
    points:
      '208,163,208,163,209,162,210,160,211,159,212,157,212,\n  157,213,155,214,154,214,153,214,151,215,150,216,150,217,149,221,149,225,149,229,\n  149,233,149,235,149,236,152,237,154,238,155,239,156,241,157,242,157,244,157,245,\n  156,247,155,248,154,249,152,250,149,250,149,254,149,257,149,261,149,265,149,265,\n  149,269,149,271,150,272,152,274,153,275,156,276,159,276,159,277,160,278,161,279,\n  162,280,164,281,165,282,167,283,168,283,169,284,170,285,171,285,171,286,173,286,\n  176,286,178,287,181,287,184,287,186,287,186,283,186,279,186,274,186,270,186,270,\n  186,269,186,267,186,266,186,264,186,262,186,261,185,260,185,259,184,258,183,257,\n  181,257,180,256,179,254,177,252,175,250,174,248,173,246,172,243,172,240,172,238,\n  173,236,174,234,175,232,176,230,178,229,180,228,181,228,182,227,184,226,185,225,\n  185,224,186,219,186,213,186,208,186,203,186,201,186,201,183,202,179,204,174,205,\n  170,206,165,208,163',
    alt: 'vulva #1',
    name: 'vulva-1',
    linkedWith: ['vulva', 'vulva-2'],
  },
  'vulva-2': {
    shape: 'poly',
    points:
      '232,129,233,127,234,126,235,124,236,123,238,121,239,\n  121,242,120,244,120,246,121,248,122,250,124,251,126,251,126,253,128,254,129,256,\n  131,257,133,257,133,257,133,259,134,261,136,263,138,265,140,265,140,265,140,267,\n  142,268,144,270,147,272,149,272,149,272,149,271,149,269,149,267,149,265,149,262,\n  149,260,149,257,149,255,149,253,149,252,149,252,149,250,148,249,146,247,145,245,\n  143,244,142,241,143,239,144,238,145,237,146,236,147,235,148,234,148,232,149,229,\n  149,225,149,221,149,218,149,216,148,218,146,221,143,224,139,227,135,230,131,232,\n  129',
    alt: 'vulva #2',
    name: 'vulva-2',
    linkedWith: ['vulva-1', 'vulva'],
  },
  urethra: {
    shape: 'poly',
    points:
      '244,157,240,157,237,155,236,152,235,151,235,149,236,\n  147,236,146,238,144,240,143,243,142,245,143,247,144,248,145,249,146,250,148,250,\n  150,250,152,249,153,248,155,246,156,244,157',
    alt: 'urethra',
    name: 'urethra',
    linkedWith: 'urethra-2',
  },
  'urethra-2': {
    shape: 'poly',
    points:
      '482,134,482,134,482,136,482,139,482,142,482,146,482,\n  151,482,155,482,159,482,162,482,165,482,167,482,167,482,167,480,167,477,167,473,\n  167,468,167,463,167,451,167,436,167,420,167,405,167,389,167,377,167,372,167,367,\n  167,363,167,360,167,358,167,358,167,358,167,358,165,358,162,358,159,358,155,358,\n  151,358,146,358,142,358,139,358,136,358,134,358,134,358,134,360,134,363,134,367,\n  134,372,134,377,134,389,134,405,134,420,134,436,134,451,134,463,134,468,134,473,\n  134,477,134,480,134,482,134,482,134',
    alt: 'urethra #1',
    name: 'urethra-2',
    linkedWith: 'urethra',
  },
  vagina: {
    shape: 'poly',
    points:
      '483,172,483,172,483,174,483,177,483,180,483,184,483,\n  189,483,193,483,197,483,200,483,203,483,205,483,205,483,205,481,205,478,205,474,\n  205,469,205,463,205,452,205,436,205,421,205,405,205,389,205,378,205,372,205,367,\n  205,363,205,360,205,358,205,358,205,358,205,358,203,358,200,358,197,358,193,358,\n  189,358,184,358,180,358,177,358,174,358,172,358,172,358,172,360,172,363,172,367,\n  172,372,172,378,172,389,172,405,172,421,172,436,172,452,172,463,172,469,172,474,\n  172,478,172,481,172,483,172,483,172',
    alt: 'vagina #1',
    name: 'vagina',
    linkedWith: 'vagina-right',
  },
  'vagina-right': {
    shape: 'poly',
    points:
      '244,172,247,172,249,173,251,174,253,175,254,177,256,\n  178,258,182,259,186,259,190,258,194,257,198,254,201,252,202,250,203,248,204,246,\n  205,244,205,241,205,237,205,233,203,231,200,228,198,227,194,226,191,226,187,226,\n  184,228,181,230,177,233,174,238,173,239,172,240,172,241,172,242,172,243,172,244,\n  172',
    alt: 'vagina',
    name: 'vagina-right',
    linkedWith: 'vagina',
  },
  anus: {
    shape: 'poly',
    points:
      '276,299,273,299,271,299,269,300,268,300,267,301,266,\n  302,265,303,265,306,261,310,259,312,256,314,254,315,251,316,248,316,245,316,242,\n  316,239,315,237,314,235,313,233,311,231,309,228,305,226,300,226,294,226,290,227,\n  287,229,284,231,281,234,278,237,277,240,275,243,274,247,274,250,274,254,275,257,\n  277,261,279,263,282,265,285,266,288,267,292,267,296,267,296,269,296,273,296,276,\n  296,281,296,287,296,299,296,315,296,332,296,348,296,364,296,376,296,382,296,387,\n  296,390,296,394,296,396,296,396,296,396,296,396,292,396,288,396,284,396,280,396,\n  280,396,280,397,280,399,280,401,280,403,280,406,280,412,280,420,280,428,280,436,\n  280,444,280,450,280,453,280,456,280,457,280,459,280,460,280,460,280,460,280,460,\n  282,460,285,460,289,460,293,460,297,460,301,460,306,460,309,460,312,460,314,460,\n  314,460,314,459,314,457,314,456,314,453,314,450,314,444,314,436,314,428,314,420,\n  314,412,314,406,314,403,314,401,314,399,314,397,314,396,314,396,314,396,314,396,\n  310,396,307,396,303,396,299,396,299,396,299,394,299,391,299,388,299,383,299,377,\n  299,366,299,351,299,336,299,321,299,306,299,295,299,289,299,284,299,281,299,278,\n  299,276,299,276,299',
    alt: 'anus',
    name: 'anus',
  },
};

const genitalsFemaleMapKeys = Object.keys(genitalsFemaleMapParts);

const mapInfo = {
  width: 493,
  height: 402,
  image: GenitalsFemale,
  name: 'genitals',
  parts: genitalsFemaleMapParts,
  keys: genitalsFemaleMapKeys,
};

export default mapInfo;
