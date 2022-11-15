import { LevelFormat, convertInchesToTwip } from "docx";

const BulletPointConfig = () => {
  return {
    config: [
      {
        reference: "my-unique-bullet-points",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: {
                  left: convertInchesToTwip(0.5),
                  hanging: convertInchesToTwip(0.25),
                },
              },
            },
          },
        ],
      },
    ],
  };
};

export default BulletPointConfig;
