(function(){
    var script = {
 "start": "this.init()",
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.62,
  "class": "PanoramaCameraPosition",
  "pitch": 6.38
 },
 "id": "panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_camera"
},
{
 "thumbnailUrl": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_141133_00_319",
 "id": "panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04",
   "backwardYaw": 49.11,
   "yaw": 33.29,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F",
   "backwardYaw": -99.36,
   "yaw": -149.85,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_D95D3ED0_CD73_1A35_41BF_467ADC9FB20F",
  "this.overlay_CA303AE9_D2C4_FA0E_41E4_BD72FC53ED7D",
  "this.overlay_CADF839A_D2C4_6A0D_41BB_931BB8A9D68D",
  "this.overlay_C5E72B95_D2C4_DA06_41D9_CDD24DF82839",
  "this.overlay_CA8A7F8C_D2FB_DA06_41CE_200B0202D2BA",
  "this.overlay_CA91473C_D2FC_6A06_41E0_43A1829763F3",
  "this.overlay_CA4EF61C_D2FC_2A06_41E1_B8BB6AEE5154",
  "this.overlay_CA80C9EE_D2FC_2602_41E5_8396DAA49A56",
  "this.overlay_C85A2802_D2CC_2602_41D7_1866458209DF",
  "this.overlay_CBDBDF99_D2CC_3A0E_41C3_41D1334D8AF6",
  "this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_142152_00_322",
 "id": "panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E",
   "backwardYaw": -161.28,
   "yaw": -57.78,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_CBC501BA_D2CC_E602_41DC_E31A78E95D23",
  "this.overlay_C7FEF7A5_D5D2_3A9B_41DF_14E1143AC396",
  "this.overlay_C7ED29CF_D5D6_36A8_41E8_9D293D95E0D2",
  "this.overlay_C7FD3206_D5D2_3599_41B8_DA8C423DF636",
  "this.overlay_C6812823_D5D2_F59F_41B8_33DF0A177617",
  "this.panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_camera"
},
{
 "thumbnailUrl": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_140403_00_316",
 "id": "panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09",
   "backwardYaw": -87.17,
   "yaw": -102,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754",
   "backwardYaw": 101.12,
   "yaw": 86.04,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F",
   "backwardYaw": 164.3,
   "yaw": -3.89,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 129,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_D98DEBF0_CCD1_79F5_41D9_B1BF52432BAF",
  "this.overlay_D90FD3F9_CCD7_09F6_41E4_BE75111D4227",
  "this.overlay_D9B576EB_CCD7_0BEB_41E6_5EC38A4F7FA5",
  "this.overlay_DE40EFC8_CCD7_1A15_41B5_815372BEC0B0",
  "this.overlay_D89E82B1_CCD1_0A77_41CD_793EA1F480E6",
  "this.overlay_C2E55DB5_D5D6_2EFB_41DF_50A6371DD73B",
  "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -130.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CF3B2074_D5B1_D679_41DF_6C833707EE14"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 27.5,
  "class": "PanoramaCameraPosition",
  "pitch": -6.25
 },
 "id": "panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_camera"
},
{
 "thumbnailUrl": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_141503_00_321",
 "id": "panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F",
   "backwardYaw": -61.3,
   "yaw": -4.4,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_CBEA762C_D2FC_6A05_41E2_B8AC55D2D33F",
  "this.overlay_C872BC9B_D2C4_DE02_41E6_0E5FC25B8BB3",
  "this.overlay_CB5BC10B_D2C4_2602_41D2_C25C5CF969B6",
  "this.overlay_CABDA6DB_D2C4_6A02_41D3_7B23C3723076",
  "this.overlay_CBAEFB43_D2C4_3A02_41D5_60856B9C0E12",
  "this.overlay_CB7D35AA_D2C4_2E02_41D1_6DD1FCE75370",
  "this.panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 80.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CF355081_D5B1_D69B_41E1_3B7C2952639A"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -62.51,
  "class": "PanoramaCameraPosition",
  "pitch": 8.55
 },
 "id": "panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -146.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE94E1AC_D5B1_D6E8_41E1_0EC99AC73FC8"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 92.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEFAB0C2_D5B1_D699_41DE_81298610F202"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 122.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CF0DD0B4_D5B1_D6F9_41E5_4C92D8300D5D"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE72F1E4_D5B1_D699_41E0_7307350718CC"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -93.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE6251FB_D5B1_D66F_4177_373BDF1F60D4"
},
{
 "thumbnailUrl": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_140517_00_317",
 "id": "panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9",
   "backwardYaw": 86.04,
   "yaw": 101.12,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_DFE05A12_CCD3_3A35_41E0_F68F490E7855",
  "this.overlay_DF2C41CD_CCD3_062F_41E2_266446CF8808",
  "this.panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.08,
  "class": "PanoramaCameraPosition",
  "pitch": -2.02
 },
 "id": "panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -106.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEA69194_D5B1_D6B8_41E1_C9BA8909F475"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0.64
 },
 "id": "panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEC7415B_D5B1_D7AF_41E8_60D7A87D69F0"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEC9813D_D5B1_D7EB_41E3_A226AB33F954"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEB73178_D5B1_D668_41DC_6E3DDE4BF53A"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -15.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEE1D105_D5B1_D79B_41E3_4970E9B50258"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 30.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEDCC126_D5B1_D799_41D3_872F1A78DF70"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 94.13,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.13,
  "pitch": -6.21,
  "hfov": 120
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetHfov": 120,
   "targetPitch": -6.21,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "id": "panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -78.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CEF5A0E6_D5B1_D699_41CD_56CADE36244E"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 139.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CF12F0A7_D5B1_D6E7_41D3_7F9C1A2A6829"
},
{
 "thumbnailUrl": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_135917_00_314",
 "id": "panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9",
   "backwardYaw": -102,
   "yaw": -87.17,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4",
   "backwardYaw": 103,
   "yaw": 73.36,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_D8B7F076_CCD1_06FD_41D5_3BC49C8EA573",
  "this.overlay_DF821DEE_CCD1_39ED_41E7_8EB3311D2B6A",
  "this.overlay_DF3641D6_CCD7_063D_41DC_92397416B419",
  "this.overlay_C3C46A67_D5D2_EA67_41E9_30D5A1D51C65",
  "this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77,
  "pitch": 0,
  "hfov": 120
 },
 "id": "camera_CF19909B_D5B1_D6AF_41D1_27C75A617F2D"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -155.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE84A1C8_D5B1_D6A8_41EA_96A31FEE314F"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 118.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CE510207_D5B1_D5A7_41CD_BB4DDA44D14B"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_CF2EE08E_D5B1_D6A9_41B4_D3F51917020D"
},
{
 "thumbnailUrl": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_140748_00_318",
 "id": "panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6",
   "backwardYaw": -149.85,
   "yaw": -99.36,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9",
   "backwardYaw": -3.89,
   "yaw": 164.3,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9",
   "backwardYaw": -3.89,
   "yaw": -166.94,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714",
   "backwardYaw": -4.4,
   "yaw": -61.3,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_DF967AC5_CCD1_1A1F_41D4_A4E08142FD99",
  "this.overlay_D8134308_CCD1_0A15_41D3_03EA82EF606F",
  "this.overlay_DA6ACC57_CCCF_3E3B_41DF_727D7C1E0EE8",
  "this.overlay_D8FF5EF0_CCF1_3BF5_41E2_70736BF264BF",
  "this.overlay_D84D66E4_CD71_0A1D_41DE_ACFFFE85CC55",
  "this.overlay_D94D1E25_CD73_FA1F_41D0_14F48BE8EB1C",
  "this.overlay_DB1CC662_CD71_0A1A_41E8_550B09D95A97",
  "this.overlay_CB15CCFF_D2C4_5E02_41D3_AC364345D3D9",
  "this.overlay_CADA1BBB_D2C4_7A02_41CC_B4137E39D184",
  "this.overlay_C6DD214A_D5DE_57A9_41C9_4D01C040D618",
  "this.overlay_C69E343C_D5DF_FDE9_41E8_9CC5E065B938",
  "this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_camera"
},
{
 "thumbnailUrl": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_t.jpg",
 "class": "Panorama",
 "partial": false,
 "label": "IMG_20220214_140058_00_315",
 "id": "panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09",
   "backwardYaw": 73.36,
   "yaw": 103,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 127,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_C159D0E5_CCB3_061E_41D9_AC2D1B22E411",
  "this.overlay_C0BA791B_D5D2_57A8_41DB_DE173FBBDA38",
  "this.panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 17.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0.79
 },
 "id": "panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_camera"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "items": [
  {
   "media": "this.panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4",
   "camera": "this.panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09",
   "camera": "this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9",
   "camera": "this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754",
   "camera": "this.panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F",
   "camera": "this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714",
   "camera": "this.panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6",
   "camera": "this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04",
   "camera": "this.panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91",
   "camera": "this.panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_142313_00_323",
 "id": "panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04",
   "backwardYaw": -40.2,
   "yaw": 24.12,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91",
   "backwardYaw": -57.78,
   "yaw": -161.28,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_C198D9E9_D5B2_F66B_41B0_47CF4B9C3C3D",
  "this.overlay_C0904996_D5AE_76B9_41DE_CD7370130D0A",
  "this.overlay_C69069D7_D5D2_36B8_41D5_80E10CDA2C9B",
  "this.overlay_C6C220D9_D5D3_D6AB_41BA_B0070E3E0378",
  "this.panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220214_141308_00_320",
 "id": "panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6",
   "backwardYaw": 33.29,
   "yaw": 49.11,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E",
   "backwardYaw": 24.12,
   "yaw": -40.2,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_CA3AE03C_D2FC_6605_41AE_56059CC87B80",
  "this.overlay_CAF96CBB_D2FC_5E02_41E4_3B2CA26EF989",
  "this.overlay_CB8C9EEA_D2CC_3A02_41E8_833FF0F5CA2B",
  "this.overlay_C6221EDC_D5DE_6AA9_41BC_32FCEB974E1B",
  "this.panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "ViewerArea",
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 7,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 30,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": 90,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container"
},
{
 "data": {
  "name": "---INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F, this.camera_CF355081_D5B1_D69B_41E1_3B7C2952639A); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D95D3ED0_CD73_1A35_41BF_467ADC9FB20F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -149.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_0_1_0_map.gif",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.55,
   "hfov": 60.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CA303AE9_D2C4_FA0E_41E4_BD72FC53ED7D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -47.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97,
   "hfov": 73.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1309D86_D5B7_EE99_41A9_65A93163397C",
   "pitch": -26.94,
   "yaw": -54.68,
   "hfov": 15.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CADF839A_D2C4_6A0D_41BB_931BB8A9D68D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -54.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.94,
   "hfov": 15.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C5E72B95_D2C4_DA06_41D9_CDD24DF82839",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -102.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_3_1_0_map.gif",
      "width": 129,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.43,
   "hfov": 35.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C130FD86_D5B7_EE99_41B7_E7759EFAE1A5",
   "pitch": -25.81,
   "yaw": -101.78,
   "hfov": 14.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CA8A7F8C_D2FB_DA06_41CE_200B0202D2BA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -101.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.81,
   "hfov": 14.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1375D86_D5B7_EE99_41D5_5305B0E47285",
   "pitch": -35.36,
   "yaw": -159.31,
   "hfov": 13.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CA91473C_D2FC_6A06_41E0_43A1829763F3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -159.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.36,
   "hfov": 13.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04, this.camera_CF3B2074_D5B1_D679_41DF_6C833707EE14); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CA4EF61C_D2FC_2A06_41E1_B8BB6AEE5154",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 33.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_6_1_0_map.gif",
      "width": 128,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.5,
   "hfov": 81.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C137DD87_D5B7_EEA7_41B2_E0641A32F31D",
   "pitch": -42.9,
   "yaw": 53.47,
   "hfov": 11.91,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CA80C9EE_D2FC_2602_41E5_8396DAA49A56",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 53.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_7_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.9,
   "hfov": 11.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C85A2802_D2CC_2602_41D7_1866458209DF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 117.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_8_1_0_map.gif",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.1,
   "hfov": 100.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1365D87_D5B7_EEA7_41C0_3E25CDC2645A",
   "pitch": -45.91,
   "yaw": 118.67,
   "hfov": 12.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CBDBDF99_D2CC_3A0E_41C3_41D1334D8AF6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 118.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_9_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.91,
   "hfov": 12.88
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E, this.camera_CE72F1E4_D5B1_D699_41E0_7307350718CC); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CBC501BA_D2CC_E602_41DC_E31A78E95D23",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -57.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_0_1_0_map.gif",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.13,
   "hfov": 111.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C223A18B_D5D2_36A8_41C4_7985786361D3",
   "pitch": -35.36,
   "yaw": -78.04,
   "hfov": 17.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C7FEF7A5_D5D2_3A9B_41DF_14E1143AC396",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -78.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.36,
   "hfov": 17.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C7ED29CF_D5D6_36A8_41E8_9D293D95E0D2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 142.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_2_1_0_map.gif",
      "width": 127,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.5,
   "hfov": 88.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C7FD3206_D5D2_3599_41B8_DA8C423DF636",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_3_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_3_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_3_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C223718C_D5D2_36A8_41C1_826330E1610A",
   "pitch": -37.49,
   "yaw": -172.37,
   "hfov": 16.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C6812823_D5D2_F59F_41B8_33DF0A177617",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -172.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_4_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.49,
   "hfov": 16.89
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754, this.camera_CEF5A0E6_D5B1_D699_41CD_56CADE36244E); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D98DEBF0_CCD1_79F5_41D9_B1BF52432BAF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 86.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_0_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.34,
   "hfov": 65.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C835A4AC_D2CC_2E06_41BB_88E7EB08B988",
   "pitch": -10.63,
   "yaw": 83.3,
   "hfov": 9.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D90FD3F9_CCD7_09F6_41E4_BE75111D4227",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 83.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.63,
   "hfov": 9.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F, this.camera_CEE1D105_D5B1_D79B_41E3_4970E9B50258); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D9B576EB_CCD7_0BEB_41E6_5EC38A4F7FA5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -3.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_2_1_0_map.gif",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.59,
   "hfov": 57.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09, this.camera_CEFAB0C2_D5B1_D699_41DE_81298610F202); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DE40EFC8_CCD7_1A15_41B5_815372BEC0B0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -102,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_4_1_0_map.gif",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.81,
   "hfov": 81.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB3D8983_CCF3_061A_41D7_F23D089BC4C2",
   "pitch": -28.58,
   "yaw": -96.88,
   "hfov": 16.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D89E82B1_CCD1_0A77_41CD_793EA1F480E6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -96.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.58,
   "hfov": 16.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CFF811DE_D5D2_36A9_41E0_478C640924E2",
   "pitch": -29.2,
   "yaw": -6.32,
   "hfov": 14.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C2E55DB5_D5D6_2EFB_41DF_50A6371DD73B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -6.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_7_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.2,
   "hfov": 14.63
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F, this.camera_CE510207_D5B1_D5A7_41CD_BB4DDA44D14B); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CBEA762C_D2FC_6A05_41E2_B8AC55D2D33F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -4.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_0_1_0_map.gif",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.56,
   "hfov": 77.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C131CD85_D5B7_EE9B_41D5_38EE0D7634A5",
   "pitch": -29.33,
   "yaw": -0.41,
   "hfov": 14.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C872BC9B_D2C4_DE02_41E6_0E5FC25B8BB3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -0.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.33,
   "hfov": 14.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CB5BC10B_D2C4_2602_41D2_C25C5CF969B6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 91.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.72,
   "hfov": 65.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1302D85_D5B7_EE9B_41D2_8A6FE29CD511",
   "pitch": -20.54,
   "yaw": 88.77,
   "hfov": 15.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CABDA6DB_D2C4_6A02_41D3_7B23C3723076",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 88.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.54,
   "hfov": 15.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CBAEFB43_D2C4_3A02_41D5_60856B9C0E12",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 46.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_4_1_0_map.gif",
      "width": 135,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.19,
   "hfov": 35.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C131ED85_D5B7_EE9B_41B8_B2E4A22AD7D3",
   "pitch": -19.41,
   "yaw": 48.32,
   "hfov": 14.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CB7D35AA_D2C4_2E02_41D1_6DD1FCE75370",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 48.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.41,
   "hfov": 14.62
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9, this.camera_CE6251FB_D5B1_D66F_4177_373BDF1F60D4); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DFE05A12_CCD3_3A35_41E0_F68F490E7855",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C83224B4_D2CC_2E06_41E3_D3C7810885C8",
   "pitch": -7.87,
   "yaw": 114.2,
   "hfov": 8.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DF2C41CD_CCD3_062F_41E2_266446CF8808",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 114.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.87,
   "hfov": 8.99
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 180,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9, this.camera_CF2EE08E_D5B1_D6A9_41B4_D3F51917020D); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D8B7F076_CCD1_06FD_41D5_3BC49C8EA573",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -87.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.96,
   "hfov": 92.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4, this.camera_CF19909B_D5B1_D6AF_41D1_27C75A617F2D); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DF821DEE_CCD1_39ED_41E7_8EB3311D2B6A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 73.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0_HS_2_1_0_map.gif",
      "width": 159,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.42,
   "hfov": 115.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DB3C1982_CCF3_061A_41E1_C47B5E61794E",
   "pitch": -36.24,
   "yaw": 81.11,
   "hfov": 17.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DF3641D6_CCD7_063D_41DC_92397416B419",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 81.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.24,
   "hfov": 17.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CFAE6364_D5DE_5B99_41A7_E0F58A3F0EE1",
   "pitch": -32.97,
   "yaw": -94.87,
   "hfov": 12.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C3C46A67_D5D2_EA67_41E9_30D5A1D51C65",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -94.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_1_HS_7_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.97,
   "hfov": 12.16
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9, this.camera_CEC9813D_D5B1_D7EB_41E3_A226AB33F954); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DF967AC5_CCD1_1A1F_41D4_A4E08142FD99",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 164.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_0_1_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.21,
   "hfov": 32.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9, this.camera_CEC7415B_D5B1_D7AF_41E8_60D7A87D69F0); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D8134308_CCD1_0A15_41D3_03EA82EF606F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -166.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_1_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "hfov": 26.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DA6ACC57_CCCF_3E3B_41DF_727D7C1E0EE8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -133.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_2_1_0_map.gif",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "hfov": 22.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1DCE3DC_D1CC_2A05_41E1_AB8A6F54FF16",
   "pitch": -28.9,
   "yaw": 171.96,
   "hfov": 13.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D8FF5EF0_CCF1_3BF5_41E2_70736BF264BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 171.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.9,
   "hfov": 13.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C133BD84_D5B7_EE99_41E5_8EE434E6BC4A",
   "pitch": -18.85,
   "yaw": -148.09,
   "hfov": 11.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D84D66E4_CD71_0A1D_41DE_ACFFFE85CC55",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -148.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_4_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.85,
   "hfov": 11.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6, this.camera_CEDCC126_D5B1_D799_41D3_872F1A78DF70); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_D94D1E25_CD73_FA1F_41D0_14F48BE8EB1C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -99.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_5_1_0_map.gif",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.48,
   "hfov": 43.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_DB1CC662_CD71_0A1A_41E8_550B09D95A97",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 9.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_8_1_0_map.gif",
      "width": 127,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.33,
   "hfov": 68.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C1310D84_D5B7_EE99_41E7_B3FC39A834B2",
   "pitch": -24.31,
   "yaw": -65.6,
   "hfov": 16.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CB15CCFF_D2C4_5E02_41D3_AC364345D3D9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -65.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_11_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.31,
   "hfov": 16.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714, this.camera_CEB73178_D5B1_D668_41DC_6E3DDE4BF53A); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CADA1BBB_D2C4_7A02_41CC_B4137E39D184",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -61.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_12_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.63,
   "hfov": 40.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C22E8188_D5D2_36A8_41DE_BEADB4F699BA",
   "pitch": -27.32,
   "yaw": -97.01,
   "hfov": 14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C6DD214A_D5DE_57A9_41C9_4D01C040D618",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -97.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_13_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.32,
   "hfov": 14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C22EC188_D5D2_36A8_4196_F9C96AF1EC82",
   "pitch": -25.31,
   "yaw": 2.35,
   "hfov": 12.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C69E343C_D5DF_FDE9_41E8_9CC5E065B938",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_14_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.31,
   "hfov": 12.2
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09, this.camera_CEA69194_D5B1_D6B8_41E1_C9BA8909F475); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C159D0E5_CCB3_061E_41D9_AC2D1B22E411",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C06B9E51_D5D2_2DBB_41BF_3D785290D940",
   "pitch": -39.25,
   "yaw": 95.34,
   "hfov": 14.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C0BA791B_D5D2_57A8_41DB_DE173FBBDA38",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 95.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0_HS_6_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.25,
   "hfov": 14.01
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04, this.camera_CF12F0A7_D5B1_D6E7_41D3_7F9C1A2A6829); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C198D9E9_D5B2_F66B_41B0_47CF4B9C3C3D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 24.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0_HS_0_1_0_map.gif",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.42,
   "hfov": 119.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C65EF6EA_D5D6_7A69_41E0_7FF02B0B6CD0",
   "pitch": -32.85,
   "yaw": -15.11,
   "hfov": 14.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C0904996_D5AE_76B9_41DE_CD7370130D0A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -15.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.85,
   "hfov": 14.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91, this.camera_CF0DD0B4_D5B1_D6F9_41E5_4C92D8300D5D); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_C69069D7_D5D2_36B8_41D5_80E10CDA2C9B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -161.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0_HS_2_1_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.22,
   "hfov": 38.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C65E66EA_D5D6_7A69_41DA_A1C3F297EA50",
   "pitch": -32.97,
   "yaw": -165.84,
   "hfov": 18.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C6C220D9_D5D3_D6AB_41BA_B0070E3E0378",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -165.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.97,
   "hfov": 18.28
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6, this.camera_CE94E1AC_D5B1_D6E8_41E1_0EC99AC73FC8); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CA3AE03C_D2FC_6605_41AE_56059CC87B80",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 49.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_0_1_0_map.gif",
      "width": 191,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.78,
   "hfov": 92.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C136DD87_D5B7_EEA7_41E7_7D838F0EC27B",
   "pitch": -19.66,
   "yaw": 50.08,
   "hfov": 14.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CAF96CBB_D2FC_5E02_41E4_3B2CA26EF989",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 50.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.66,
   "hfov": 14.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E, this.camera_CE84A1C8_D5B1_D6A8_41EA_96A31FEE314F); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_CB8C9EEA_D2CC_3A02_41E8_833FF0F5CA2B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C222218B_D5D2_36A8_41DE_A21EF69A29DD",
   "pitch": -40.13,
   "yaw": -45.92,
   "hfov": 14.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C6221EDC_D5DE_6AA9_41BC_32FCEB974E1B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -45.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_4_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.13,
   "hfov": 14.49
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "id": "panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "minHeight": 1,
 "width": 67,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container"
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1309D86_D5B7_EE99_41A9_65A93163397C",
 "levels": [
  {
   "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C130FD86_D5B7_EE99_41B7_E7759EFAE1A5",
 "levels": [
  {
   "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1375D86_D5B7_EE99_41D5_5305B0E47285",
 "levels": [
  {
   "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C137DD87_D5B7_EEA7_41B2_E0641A32F31D",
 "levels": [
  {
   "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1365D87_D5B7_EEA7_41C0_3E25CDC2645A",
 "levels": [
  {
   "url": "media/panorama_C6EC706E_CCB1_06ED_41B6_2F187724F8B6_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C223A18B_D5D2_36A8_41C4_7985786361D3",
 "levels": [
  {
   "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C223718C_D5D2_36A8_41C1_826330E1610A",
 "levels": [
  {
   "url": "media/panorama_C6FEA85C_CCB1_062D_419C_4278AFE6AF91_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C835A4AC_D2CC_2E06_41BB_88E7EB08B988",
 "levels": [
  {
   "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_DB3D8983_CCF3_061A_41D7_F23D089BC4C2",
 "levels": [
  {
   "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_CFF811DE_D5D2_36A9_41E0_478C640924E2",
 "levels": [
  {
   "url": "media/panorama_C6FE5852_CCB1_0635_41E0_020A659CCBD9_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C131CD85_D5B7_EE9B_41D5_38EE0D7634A5",
 "levels": [
  {
   "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1302D85_D5B7_EE9B_41D2_8A6FE29CD511",
 "levels": [
  {
   "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C131ED85_D5B7_EE9B_41B8_B2E4A22AD7D3",
 "levels": [
  {
   "url": "media/panorama_C6EDE060_CCB1_0615_41C1_A1FA8050E714_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C83224B4_D2CC_2E06_41E3_D3C7810885C8",
 "levels": [
  {
   "url": "media/panorama_C6EF4022_CCB1_0615_41E5_84EED4F09754_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_DB3C1982_CCF3_061A_41E1_C47B5E61794E",
 "levels": [
  {
   "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_CFAE6364_D5DE_5B99_41A7_E0F58A3F0EE1",
 "levels": [
  {
   "url": "media/panorama_C6DC1BDD_CCB0_FA2E_41E1_37C841CF9B09_1_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1DCE3DC_D1CC_2A05_41E1_AB8A6F54FF16",
 "levels": [
  {
   "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C133BD84_D5B7_EE99_41E5_8EE434E6BC4A",
 "levels": [
  {
   "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C1310D84_D5B7_EE99_41E7_B3FC39A834B2",
 "levels": [
  {
   "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C22E8188_D5D2_36A8_41DE_BEADB4F699BA",
 "levels": [
  {
   "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_13_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C22EC188_D5D2_36A8_4196_F9C96AF1EC82",
 "levels": [
  {
   "url": "media/panorama_C6FE8896_CCB1_063D_41E6_68B4E7C2A34F_0_HS_14_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C06B9E51_D5D2_2DBB_41BF_3D785290D940",
 "levels": [
  {
   "url": "media/panorama_C6E4D073_CCB1_06FA_41C8_5FD87B83B8E4_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C65EF6EA_D5D6_7A69_41E0_7FF02B0B6CD0",
 "levels": [
  {
   "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C65E66EA_D5D6_7A69_41DA_A1C3F297EA50",
 "levels": [
  {
   "url": "media/panorama_C6ECA065_CCB1_061F_41E1_4A2500A7BB1E_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C136DD87_D5B7_EEA7_41E7_7D838F0EC27B",
 "levels": [
  {
   "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_C222218B_D5D2_36A8_41DE_A21EF69A29DD",
 "levels": [
  {
   "url": "media/panorama_C6FE9839_CCB1_0676_41D0_8175575D5A04_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "85%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 50,
 "width": "50%",
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.724969033426!2d38.760818434887696!3d8.984799300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b844464c0c49d%3A0xe64f027080274712!2sJaquar%20World%20-%20Main%20Showroom!5e0!3m2!1sen!2set!4v1648560933965!5m2!1sen!2set",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "class": "WebFrame",
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "55%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#F7931E"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 60,
 "width": "45%",
 "paddingRight": 60,
 "scrollBarColor": "#0069A3",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "class": "IconButton"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "maxHeight": 1000,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.png",
 "horizontalAlign": "center",
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "class": "Image"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "height": 60
},
{
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "height": 40
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "maxHeight": 1000,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "class": "Image"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "height": 60
},
{
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "height": 40
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.57vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.68vh;font-family:'Montserrat';\"><B>Jaquar World - Main Showroom</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.41vh;\">Jaquar World is a global destination where a customer could walk in, conceptualise one\u2019s own bathroom concept; get professional inputs in design and technical issues that help make one\u2019s concepts into reality; get first-hand experience of what one is about to make; and find all the relevant products and services with an unmatched customer support that goes beyond the online or over-the-phone service, to ensure one enjoys uninterrupted bathing pleasure.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.41vh;\">Off Ethio-China Friendship Street Kirkos Sub City Woreda 03 House # 248 Marteza Building,</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.41vh;\">Ground Floor P.O.Box 102356 Addis Ababa, Ethiopia</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.3vh;\">+251 11 470 1650</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.3vh;\">contactaddis@jaquarworld.com</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "class": "HTMLText"
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 6,
 "data": {
  "name": "contact"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "width": 180,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "fontSize": "1.96vh",
 "label": "Visit Our Website",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "this.openLink('https://www.jaquarworld.com/', '_blank')",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "class": "Button",
 "height": 50
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.57vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.68vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.68vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0,
 "class": "HTMLText"
},
{
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "maxWidth": 200,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "height": "100%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "maxHeight": 200,
 "horizontalAlign": "left",
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "class": "Image"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "75%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.05vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.73vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.19vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0,
 "class": "HTMLText"
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "unregisterKey": function(key){  delete window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Player",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
