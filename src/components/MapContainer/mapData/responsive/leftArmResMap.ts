import LeftArmFemale from '../../SVGComponents/res/LeftArmFemaleRes';
import LeftArmMaleRes from '../../SVGComponents/res/LeftArmMaleRes';

const leftArmResMapParts = {
  'upper-left-arm-back': {
    shape: 'poly',
    points:
      '96,415,96,415,96,413,96,412,96,410,96,408,96,408,97,403,98,396,100,391,101,385,104,379,107,375,109,372,112,370,115,367,118,365,120,362,123,360,124,359,125,358,127,357,128,356,130,355,131,355,133,355,135,357,136,359,137,361,138,363,138,365,139,366,139,367,139,368,139,370,139,371,139,372,139,377,139,382,138,386,138,391,137,395,135,400,134,404,133,406,132,407,131,409,130,410,130,411,130,411,129,414,129,418,128,421,128,424,128,424,128,424,127,425,127,427,126,429,126,431,125,434,125,436,124,438,124,440,123,442,123,443,123,443,121,442,120,440,118,439,117,437,116,436,114,435,109,431,105,430,101,431,97,432,93,434,88,436,89,430,91,426,92,423,94,420,95,418',
    alt: 'upper-left-arm-back',
    name: 'upper-left-arm-back',
  },
  'left-hand-5-distal': {
    shape: 'poly',
    points:
      '271,874,269,875,267,875,265,874,264,874,262,873,261,871,260,870,260,868,261,867,261,865,263,863,265,862,268,861,270,861,272,862,274,863,275,864,275,866,276,867,276,869,275,871,274,872,273,873',
    alt: 'left-hand-5-distal',
    name: 'left-hand-5-distal',
  },
  'left-hand-5-medial': {
    shape: 'poly',
    points:
      '268,840,271,843,271,847,271,850,270,852,269,853,268,854,267,856,265,856,263,857,260,857,258,857,256,855,255,854,253,853,253,851,252,849,252,846,253,844,254,842,255,840,258,839,260,838,262,838,263,838,265,838,266,839',
    alt: 'left-hand-5-medial',
    name: 'left-hand-5-medial',
  },
  'left-hand-5-proximal': {
    shape: 'poly',
    points:
      '251,802,254,805,254,809,253,812,253,816,250,818,246,819,243,820,240,820,238,819,235,817,234,815,233,813,232,811,232,808,233,806,234,803,236,801,240,800,242,799,244,799,246,799,248,800,249,801',
    alt: 'left-hand-5-proximal',
    name: 'left-hand-5-proximal',
  },
  'left-hand-4-distal': {
    shape: 'poly',
    points:
      '253,908,250,910,246,908,244,905,243,904,243,902,243,901,244,899,245,897,247,895,250,894,252,894,253,895,255,896,256,897,256,899,257,901,257,902,256,904,256,906,255,907',
    alt: 'left-hand-4-distal',
    name: 'left-hand-4-distal',
  },
  'left-hand-4-medial': {
    shape: 'poly',
    points:
      '248,866,251,869,251,873,251,876,250,878,249,879,248,880,247,882,245,882,243,883,240,883,238,883,236,881,235,880,233,879,233,877,232,875,232,872,233,870,234,868,235,866,238,865,240,864,242,864,243,864,245,864,246,865',
    alt: 'left-hand-4-medial',
    name: 'left-hand-4-medial',
  },
  'left-hand-4-proximal': {
    shape: 'poly',
    points:
      '234,819,236,822,237,826,237,829,236,831,235,833,234,834,233,836,231,837,229,837,226,838,223,838,221,836,218,835,217,833,216,830,215,828,215,825,216,823,217,820,219,818,223,817,225,816,227,816,229,816,230,817,232,818',
    alt: 'left-hand-4-proximal',
    name: 'left-hand-4-proximal',
  },
  'left-hand-3-distal': {
    shape: 'poly',
    points:
      '207,927,204,929,200,927,198,924,197,923,197,921,197,920,198,918,199,916,201,914,204,913,206,913,207,914,209,915,210,916,210,918,211,920,211,921,210,923,210,925,209,926',
    alt: 'left-hand-3-distal',
    name: 'left-hand-3-distal',
  },
  'left-hand-3-medial': {
    shape: 'poly',
    points:
      '208,883,211,886,211,890,210,893,209,896,207,898,203,899,201,899,198,899,197,898,195,897,193,895,193,893,192,891,192,889,193,887,194,885,195,883,198,882,200,881,202,881,203,881,205,881,206,882',
    alt: 'left-hand-3-medial',
    name: 'left-hand-3-medial',
  },
  'left-hand-3-proximal': {
    shape: 'poly',
    points:
      '205,833,208,836,208,840,207,843,207,847,204,849,200,850,197,851,194,851,192,850,189,848,188,846,187,844,186,842,186,839,187,837,188,834,190,832,194,831,196,830,198,830,200,830,202,831,203,832',
    alt: 'left-hand-3-proximal',
    name: 'left-hand-3-proximal',
  },
  'left-hand-2-distal': {
    shape: 'poly',
    points:
      '148,920,146,920,144,920,143,919,141,918,140,916,140,915,139,913,139,911,140,910,140,908,142,906,144,905,147,904,149,905,151,906,152,907,153,909,154,911,154,912,154,914,153,916,152,918,150,919',
    alt: 'left-hand-2-distal',
    name: 'left-hand-2-distal',
  },
  'left-hand-2-medial': {
    shape: 'poly',
    points:
      '155,898,153,899,150,899,148,898,146,897,145,895,144,893,143,891,143,889,144,887,144,885,146,882,149,881,152,880,155,881,157,882,159,883,160,885,161,887,161,889,161,892,160,894,159,896,157,897',
    alt: 'left-hand-2-medial',
    name: 'left-hand-2-medial',
  },
  'left-hand-2-proximal': {
    shape: 'poly',
    points:
      '168,834,171,837,171,841,170,844,170,848,167,850,163,851,160,852,157,852,155,851,152,849,151,847,150,845,149,843,149,840,150,838,151,835,153,833,157,832,159,831,161,831,163,831,165,832,166,833',
    alt: 'left-hand-2-proximal',
    name: 'left-hand-2-proximal',
  },
  'left-hand-1-distal': {
    shape: 'poly',
    points:
      '115,824,118,825,120,826,121,828,123,831,123,833,123,835,122,838,121,840,119,842,118,843,115,844,112,844,110,843,108,842,107,841,105,839,104,837,104,835,104,833,104,831,105,829,107,827,108,826,111,824,112,824,112,824,113,824,114,824,114,824',
    alt: 'left-hand-1-distal',
    name: 'left-hand-1-distal',
  },
  'left-hand-1-medial': {
    shape: 'poly',
    points:
      '129,812,127,812,124,812,122,810,120,809,119,807,118,805,117,803,117,801,118,799,119,797,121,795,124,793,128,792,131,792,133,794,136,795,137,798,137,800,138,803,138,805,136,807,135,810,132,811',
    alt: 'left-hand-1-medial',
    name: 'left-hand-1-medial',
  },
  'left-hand-1-proximal': {
    shape: 'poly',
    points:
      '154,769,152,769,149,769,147,767,145,766,144,764,143,762,142,760,142,758,143,756,144,754,146,752,149,750,153,749,156,749,158,751,161,752,162,755,162,757,163,760,163,762,161,764,160,767,157,768',
    alt: 'left-hand-1-proximal',
    name: 'left-hand-1-proximal',
  },
  'left-hand-wrist': {
    shape: 'poly',
    points:
      '221,740,222,741,222,742,223,743,223,743,224,744,224,745,226,749,226,752,226,755,225,758,223,760,220,762,215,766,208,769,202,770,197,770,191,770,186,769,180,768,175,766,171,763,168,761,166,759,165,756,164,753,164,751,164,748,165,746,166,743,168,741,170,739,173,737,176,736,178,735,180,734,182,734,184,733,186,733,188,732,193,732,199,732,205,733,211,734,217,737',
    alt: 'left-hand-wrist',
    name: 'left-hand-wrist',
  },
  'mid-left-arm-back': {
    shape: 'poly',
    points:
      '108,433,109,433,110,434,111,434,112,434,113,435,114,436,118,438,120,441,120,444,121,447,120,451,119,454,117,461,112,468,111,476,110,481,110,489,108,495,107,498,106,501,104,503,103,505,100,507,97,508,91,509,84,508,79,505,76,503,73,502,72,500,70,498,69,495,69,493,70,491,71,489,72,487,73,484,75,481,76,479,78,476,80,473,81,471,83,468,84,466,84,465,85,462,86,456,86,451,87,445,87,440,89,438,90,437,92,435,93,435,95,434,97,433,99,433,101,432,102,432,104,432,105,432,106,432',
    alt: 'mid-left-arm-back',
    name: 'mid-left-arm-back',
  },
  'lower-left-arm-back': {
    shape: 'poly',
    points:
      '103,507,102,510,100,514,98,519,95,523,93,529,90,534,87,539,84,544,81,549,78,553,76,558,74,561,74,561,74,561,73,561,73,561,72,561,72,561,69,557,66,555,63,554,59,554,55,554,51,555,51,555,51,554,52,552,53,550,54,547,54,544,55,541,56,539,57,536,57,534,58,533,58,533,58,533,58,531,59,527,60,524,62,520,63,515,64,511,65,506,66,503,67,499,68,497,68,497,74,503,79,507,84,508,87,509,89,510,92,510,96,509,99,509',
    alt: 'lower-left-arm-back',
    name: 'lower-left-arm-back',
  },
  'left-wrist-back': {
    shape: 'poly',
    points:
      '71,563,71,565,71,567,70,569,69,571,68,573,67,575,66,579,66,582,66,584,65,586,64,588,60,589,57,590,54,591,52,591,49,591,47,590,45,589,43,588,42,586,41,584,40,581,40,578,40,575,40,572,42,568,45,564,48,560,51,557,54,556,57,555,61,555,64,556,66,557,68,557,69,559,70,560,71,561',
    alt: 'left-wrist-back',
    name: 'left-wrist-back',
  },
  'left-finger-45-back': {
    shape: 'poly',
    points:
      '46,604,46,604,47,601,49,599,50,596,51,594,51,594,51,594,52,593,53,593,54,592,56,592,58,591,60,591,61,590,63,590,64,589,65,589,65,589,65,589,65,590,64,592,64,594,63,596,62,599,62,601,61,603,60,605,60,607,60,608,60,608,60,608,59,610,59,612,59,615,59,618,59,622,59,625,59,629,59,631,59,634,59,635,59,635,59,635,58,635,56,635,55,635,53,634,53,634,53,634,53,633,54,631,54,628,54,625,54,622,54,619,55,616,55,614,55,612,55,610,55,610,55,610,54,610,53,611,52,611,51,612,51,612,51,612,50,614,49,616,48,618,47,620,47,620,47,620,47,622,46,624,46,626,45,629,44,632,44,635,43,638,43,641,42,643,42,644,42,644,42,644,41,644,40,644,38,643,37,643,37,643,37,643,38,641,39,637,40,633,41,628,42,624,43,619,44,614,45,610,46,606,46,604',
    alt: 'left-finger-45-back',
    name: 'left-finger-45-back',
  },
  'left-finger-3-back': {
    shape: 'poly',
    points:
      '49,592,49,592,49,593,48,595,47,596,47,599,46,601,45,603,44,605,44,607,43,609,43,610,43,610,43,610,42,612,41,613,39,615,38,617,38,617,38,617,38,619,37,621,36,623,35,627,34,630,34,633,33,636,32,639,31,641,31,643,31,643,31,643,29,643,28,643,26,642,24,642,24,642,25,641,25,638,26,635,27,632,28,628,29,624,31,621,32,617,33,614,34,611,35,608,36,607,36,607,36,607,35,606,35,606,35,605,35,605,35,605,35,604,36,603,37,601,38,599,38,597,39,595,40,593,41,592,42,590,42,589,42,589,42,589,44,590,46,591,47,591,49,592',
    alt: 'left-finger-3-back',
    name: 'left-finger-3-back',
  },
  'left-finger-12-back': {
    shape: 'poly',
    points:
      '5,591,7,590,9,588,12,586,14,584,18,582,21,580,25,578,28,576,31,574,35,573,37,571,39,571,39,571,39,573,39,576,39,578,39,580,39,580,39,582,40,583,40,585,40,586,41,587,40,589,40,590,38,594,37,598,35,602,33,605,32,607,31,608,30,609,29,610,28,612,27,613,26,615,25,616,24,620,22,623,21,627,19,630,18,631,17,633,15,634,14,635,13,635,12,635,12,635,12,634,11,633,12,632,14,626,17,620,19,616,21,611,22,607,24,604,25,601,26,599,27,597,27,596,28,595,28,595,28,592,29,589,29,587,29,586,29,585,29,585,28,585,28,585,27,586,23,587,19,589,16,590,12,591,9,592,7,593,5,593,3,593,3,593,3,593,3,592',
    alt: 'left-finger-12-back',
    name: 'left-finger-12-back',
  },
  'left-finger-45-front': {
    shape: 'poly',
    points:
      '327,264,328,265,330,267,332,270,333,272,334,275,335,276,337,280,339,283,340,285,341,288,342,289,343,291,344,293,344,295,345,297,346,299,347,302,348,306,349,309,351,311,351,313,352,316,353,318,352,321,349,319,347,315,345,311,343,307,342,302,341,299,340,296,339,295,338,293,337,292,337,290,337,287,337,287,336,288,334,288,333,289,331,289,331,289,332,293,333,297,334,302,335,306,335,311,335,315,332,313,331,310,330,306,329,303,329,299,328,296,327,290,326,288,325,285,323,282,322,280,320,275,320,275,320,274,319,273,319,272,318,270,317,268,317,266,316,265,316,263,315,262,315,261,315,261,315,261,318,262,321,262,324,263,327,264',
    alt: 'left-finger-45-front',
    name: 'left-finger-45-front',
  },
  'left-finger-3-front': {
    shape: 'poly',
    points:
      '336,259,336,259,337,260,338,262,339,264,341,267,343,269,344,272,346,275,347,277,349,279,349,280,349,280,349,280,350,281,350,283,351,284,351,285,351,285,351,285,353,288,354,291,355,293,356,296,356,296,358,300,360,303,362,307,363,310,365,314,365,318,362,316,359,313,357,310,355,306,353,302,351,299,350,296,348,294,347,292,345,290,344,289,342,286,340,284,338,279,335,274,332,269,330,264,329,262,329,262,331,261,333,261,334,260,336,259',
    alt: 'left-finger-3-front',
    name: 'left-finger-3-front',
  },
  'left-finger-12-front': {
    shape: 'poly',
    points:
      '358,255,362,256,365,257,368,259,370,260,373,262,376,265,373,266,371,266,369,265,367,265,365,264,363,263,362,263,361,262,359,262,358,262,356,262,355,262,353,263,353,265,354,268,355,270,356,273,356,274,359,280,363,285,367,290,371,295,374,300,376,306,372,305,370,303,368,300,365,297,364,294,361,291,361,291,361,290,360,289,359,288,357,287,356,285,355,284,353,283,352,282,351,281,351,280,351,280,351,280,350,278,348,276,347,274,345,271,343,268,342,266,340,263,338,261,337,258,336,257,336,257,336,257,337,255,338,253,339,250,340,248,340,248,344,249,346,250,349,251,352,252,355,253',
    alt: 'left-finger-12-front',
    name: 'left-finger-12-front',
  },
  'left-wrist-front': {
    shape: 'poly',
    points:
      '336,255,334,258,331,260,328,261,324,262,320,262,317,260,316,259,314,257,312,254,310,252,309,249,308,248,306,246,304,244,303,242,301,241,300,238,300,236,300,234,301,231,302,230,303,228,305,226,307,225,311,223,315,222,319,224,320,224,321,225,322,226,323,228,324,229,325,230,326,233,329,236,331,239,334,243,337,246,339,248,339,249,338,250,338,252,338,253,337,254',
    alt: 'left-wrist-front',
    name: 'left-wrist-front',
  },
  'lower-left-arm-front': {
    shape: 'poly',
    points:
      '309,193,309,193,309,194,310,196,311,198,311,200,312,202,313,204,313,207,314,208,314,210,315,211,315,211,315,211,316,214,317,217,318,219,319,222,319,222,315,222,311,222,308,224,305,225,302,227,300,231,300,231,300,232,299,234,299,235,298,237,298,237,292,227,287,219,281,211,279,207,276,203,274,198,271,193,269,188,267,182,269,183,271,184,273,184,275,185,277,186,279,186,284,186,288,185,292,183,296,180,299,177,301,173,303,175,305,179,306,182,307,186,308,190',
    alt: 'lower-left-arm-front',
    name: 'lower-left-arm-front',
  },
  'mid-left-arm-front': {
    shape: 'poly',
    points:
      '284,114,285,115,286,116,286,118,287,119,287,121,287,122,287,122,287,123,287,125,287,127,287,130,287,132,288,135,288,137,288,139,288,141,288,142,288,142,289,146,291,150,292,154,294,157,296,160,298,163,300,166,300,169,300,172,300,175,298,178,294,180,293,181,292,182,291,182,290,183,289,183,288,183,287,184,285,184,284,185,282,185,281,185,279,185,277,185,274,184,272,183,270,182,268,181,267,179,266,177,265,175,264,173,263,171,263,169,262,167,262,167,262,165,261,163,261,160,260,157,259,154,258,150,258,147,257,144,256,142,256,140,256,140,255,138,254,134,253,130,252,127,252,123,252,121,253,118,256,116,258,115,260,113,263,112,266,112,268,111,272,111,276,111,279,111,283,112',
    alt: 'mid-left-arm-front',
    name: 'mid-left-arm-front',
  },
  'upper-left-arm-front': {
    shape: 'poly',
    points:
      '242,78,240,72,238,68,238,63,237,59,237,54,237,48,237,46,237,44,238,41,238,39,239,37,240,36,240,35,241,34,241,32,242,31,242,30,243,30,247,31,252,33,256,36,259,39,263,43,265,46,270,53,273,60,275,67,277,74,278,82,279,90,279,90,280,91,280,93,281,96,281,98,282,101,283,104,284,107,284,109,285,111,285,112,285,112,281,111,276,110,272,110,267,110,263,111,259,113,259,113,257,115,255,116,253,118,251,119,251,119,251,119,251,117,251,114,251,111,251,107,251,103,250,99,250,95,250,92,250,89,250,87,250,87,248,86,246,85,245,84,244,82,243,80',
    alt: 'upper-left-arm-front',
    name: 'upper-left-arm-front',
  },
};

const leftArmResMapKeys = Object.keys(leftArmResMapParts);

const mapInfo = {
  image: {
    male: LeftArmMaleRes,
    female: LeftArmFemale,
  },
  width: 390,
  height: 970,
  name: 'leftArm',
  keys: leftArmResMapKeys,
  parts: leftArmResMapParts,
};

export default mapInfo;
