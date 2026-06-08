const categories = [
  {
    id: 1,
    name: "Semiconductors",
    children: [
      {
        id: 11,
        name: "Discrete Components",
        children: [
          {
            id: 111,
            name: "Rectifier Diodes",
          },
          {
            id: 112,
            name: "Fast Recovery Diodes",
          },
          {
            id: 113,
            name: "Schottky Diodes",
          },
          {
            id: 114,
            name: "Bridge Rectifiers",
          },
          {
            id: 115,
            name: "Zener Diodes",
          },
          {
            id: 116,
            name: "TVS Diodes",
          },
        ],
      },

      {
        id: 12,
        name: "Transistors",
        children: [
          {
            id: 121,
            name: "NPN Transistors",
          },
          {
            id: 122,
            name: "PNP Transistors",
          },
          {
            id: 123,
            name: "MOSFETs",
          },
        ],
      },

      {
        id: 13,
        name: "Thyristors",
      },

      {
        id: 14,
        name: "IGBTs",
      },
    ],
  },

  {
    id: 2,
    name: "Optoelectronics",
    children: [
      {
        id: 21,
        name: "LEDs",
      },
      {
        id: 22,
        name: "Infrared LEDs",
      },
    ],
  },

  {
    id: 3,
    name: "Passive Components",
    children: [
      {
        id: 31,
        name: "Resistors",
      },
      {
        id: 32,
        name: "Capacitors",
      },
    ],
  },
];

export default categories;