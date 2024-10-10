import ChestMale from '../SVGComponents/ChestMale';

const chestMaleMapParts = {
  'right-throat': {
    shape: 'poly',
    points:
      '214,41,217,48,220,54,223,61,226,67,229,73,234,79,234,\n  79,231,79,227,78,222,77,216,76,211,76,205,75,199,74,194,73,190,72,187,72,187,72,\n  182,72,179,72,176,73,173,73,170,74,168,74,163,75,159,77,151,78,149,79,147,79,145,\n  79,144,79,143,78,143,78,141,77,141,74,140,71,142,70,145,69,149,68,153,67,157,65,\n  161,64,165,62,169,61,173,59,176,58,179,56,181,55,182,54,184,53,185,52,186,51,188,\n  49,189,48,192,44,195,38,196,33,198,27,200,21,201,16,204,18,206,20,207,22,209,24,\n  210,25,210,27,212,31,212,35,214,41',
    alt: 'Høyre hals sett forfra',
    name: 'right-throat',
  },
  'mid-throat': {
    shape: 'poly',
    points:
      '227,33,231,34,234,35,237,35,240,35,243,35,246,34,251,\n  33,256,30,263,27,263,29,262,32,261,36,260,39,258,43,257,47,255,51,254,55,252,58,\n  251,62,249,65,248,67,247,69,246,72,244,74,243,76,241,78,238,78,235,78,233,76,231,\n  73,229,71,228,68,227,66,224,61,221,54,218,46,215,39,213,31,212,26,212,26,213,26,\n  214,27,216,28,218,29,220,29,221,30,223,31,225,32,226,33,227,33,227,33',
    alt: 'Midtre hals sett forfra',
    name: 'mid-throat',
  },
  'left-throat': {
    shape: 'poly',
    points:
      '286,36,288,40,292,43,296,47,301,51,306,54,311,57,316,\n  60,321,63,327,66,332,68,337,70,341,71,341,71,341,73,341,76,340,78,340,80,340,80,\n  337,80,335,80,332,80,329,80,327,80,324,79,319,78,314,76,310,74,305,72,300,71,293,\n  71,288,71,283,71,279,72,274,73,270,74,265,75,261,76,258,78,254,78,250,79,246,79,\n  242,78,245,76,247,73,248,71,250,68,251,65,252,62,252,62,253,61,254,58,255,56,256,\n  53,257,50,258,47,259,44,260,42,261,40,262,38,262,38,262,38,263,35,264,32,265,28,\n  266,25,266,25,267,24,269,22,271,20,273,18,276,16,277,15,279,17,280,21,281,24,282,\n  28,283,32,286,36',
    alt: 'Venstre hals sett forfra',
    name: 'left-throat',
  },
  'right-chest': {
    shape: 'poly',
    points:
      '169,77,169,77,170,77,172,76,174,76,177,76,180,76,182,\n  76,185,75,187,75,189,75,190,75,190,75,190,75,191,75,193,75,194,75,196,76,199,76,\n  201,76,203,76,204,77,206,77,207,77,207,77,207,77,209,77,210,78,212,79,214,80,214,\n  80,214,80,214,81,214,83,215,85,215,87,215,87,215,87,215,90,215,94,215,99,215,106,\n  215,114,215,122,215,131,215,141,215,151,215,161,215,172,215,183,215,193,215,203,\n  215,213,215,222,215,230,215,238,215,245,215,250,215,254,215,257,215,257,211,257,\n  206,256,201,256,197,255,192,254,188,253,182,251,176,250,170,248,164,246,158,243,\n  153,240,148,237,143,233,139,229,135,224,132,219,129,213,128,210,127,207,126,204,\n  125,201,124,198,124,195,124,192,125,189,127,186,129,183,130,181,132,178,134,174,\n  136,169,138,164,139,160,141,155,142,150,144,144,145,139,146,133,147,128,147,122,\n  147,116,147,116,147,114,146,111,146,108,146,103,145,99,145,95,144,91,144,87,143,\n  84,143,82,143,82,143,82,145,82,147,81,150,81,153,80,156,79,159,79,163,78,165,77,\n  167,77,169,77,169,77',
    alt: 'Høyre brystparti',
    name: 'right-chest',
  },
  'mid-chest': {
    shape: 'poly',
    points:
      '262,96,262,96,262,98,262,102,262,105,262,110,262,114,\n  262,119,262,123,262,126,262,130,262,132,262,132,262,132,262,134,262,137,262,141,\n  262,146,262,152,262,163,262,179,262,195,262,210,262,226,262,237,262,243,262,248,\n  262,252,262,255,262,257,262,257,259,258,257,258,255,258,253,258,252,258,250,257,\n  248,257,245,256,240,255,238,255,236,256,234,256,232,257,230,257,228,257,228,257,\n  225,257,223,257,220,257,217,257,217,257,217,257,217,254,217,250,217,245,217,238,\n  217,229,217,221,217,211,217,201,217,190,217,179,217,168,217,157,217,146,217,135,\n  217,125,217,115,217,107,217,98,217,92,217,87,217,82,217,79,217,79,217,79,220,79,\n  223,80,226,80,229,81,229,81,229,81,231,81,234,80,236,80,238,80,238,80,244,80,246,\n  81,249,81,250,81,251,81,253,80,255,80,258,79,261,78,261,78,261,79,261,81,261,83,\n  261,85,262,87,262,89,262,92,262,93,262,95,262,96,262,96',
    alt: 'Brystbein',
    name: 'mid-chest',
  },
  'left-chest': {
    shape: 'poly',
    points:
      '264,86,264,85,264,84,264,82,264,81,264,80,265,79,266,\n  78,267,77,268,77,270,76,271,76,272,76,272,76,273,76,275,76,277,76,279,75,281,75,\n  283,75,286,75,287,74,289,74,290,74,290,74,296,74,301,74,305,75,309,76,312,77,315,\n  78,318,80,321,81,324,82,328,82,333,83,340,83,338,90,337,97,336,103,335,110,335,\n  116,336,123,336,136,339,148,344,162,346,165,347,169,349,173,351,177,353,181,355,\n  184,356,186,357,188,359,190,360,192,361,195,361,197,361,200,360,204,359,207,357,\n  211,356,214,354,217,350,225,345,231,338,236,331,241,323,245,315,248,307,251,298,\n  253,289,254,280,256,272,256,264,257,264,257,264,254,264,250,264,245,264,238,264,\n  230,264,222,264,213,264,203,264,193,264,182,264,172,264,161,264,150,264,140,264,\n  130,264,121,264,113,264,105,264,98,264,93,264,89,264,86,264,86',
    alt: 'Venstre brystparti',
    name: 'left-chest',
  },
  'right-ribs': {
    shape: 'poly',
    points:
      '139,233,145,239,154,244,163,248,172,252,181,255,190,\n  257,190,257,192,257,196,257,199,257,204,258,209,258,213,259,218,259,221,259,225,\n  260,227,260,227,260,225,263,222,269,218,274,214,279,210,285,208,288,204,293,200,\n  299,196,305,191,311,187,317,182,321,175,327,167,330,159,333,151,335,142,336,133,\n  336,133,336,133,334,133,332,133,330,133,326,133,323,133,320,133,317,133,314,133,\n  312,133,310,133,310,133,310,133,309,133,306,133,304,133,301,133,299,132,296,132,\n  293,132,291,132,288,132,287,132,287,132,287,132,285,132,283,132,281,131,277,131,\n  274,131,271,131,268,130,265,130,263,130,261,130,261,130,261,130,258,129,254,129,\n  250,129,244,128,239,128,233,127,227,127,223,126,219,126,216,126,216,128,219,130,\n  222,132,224,134,227,136,230,139,233',
    alt: 'Høyre ribbein under bryst sett forfra',
    name: 'right-ribs',
  },
  'left-ribs': {
    shape: 'poly',
    points:
      '355,236,355,236,355,237,355,239,355,241,354,244,354,\n  247,354,249,354,252,353,254,353,256,353,257,353,257,353,257,353,258,353,260,353,\n  262,352,266,352,269,352,277,351,286,350,296,349,306,349,316,348,323,348,326,347,\n  330,347,332,347,334,347,335,347,335,341,335,335,335,329,334,322,333,316,332,311,\n  329,307,327,303,324,299,321,295,317,292,313,288,309,281,300,275,290,270,283,268,\n  279,265,276,262,272,259,268,257,264,255,260,258,259,264,258,269,258,275,257,281,\n  257,284,257,284,257,285,257,286,257,287,257,288,257,288,257,294,257,300,256,306,\n  254,313,253,319,250,326,247,332,244,338,240,343,236,348,232,352,227,355,222,356,\n  224,356,227,356,229,356,231,355,234,355,236',
    alt: 'Venstre ribbein under bryst sett forfra',
    name: 'left-ribs',
  },
};

const chestMaleMapKeys = Object.keys(chestMaleMapParts);

const mapInfo = {
  image: ChestMale,
  name: 'chest',
  width: 500,
  height: 469,
  keys: chestMaleMapKeys,
  parts: chestMaleMapParts,
};

export default mapInfo;
