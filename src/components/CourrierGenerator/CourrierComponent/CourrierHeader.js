import BlobImage from "/home/amaury/repos/botnot/src/utils/KeyExists/BlobImage.js"
import HeaderImg from "../Images/Header.png";
import { Header, Paragraph, ImageRun } from "docx";

const CourrierHeader = () => {
    return {
        first: new Header({
          children: [
            // Header image
            new Paragraph({
              children: [
                new ImageRun({
                  data: BlobImage(HeaderImg),
                  transformation: {
                    width: 800,
                    height: 234,
                  },
                  floating: {
                    horizontalPosition: {
                      offset: 0,
                    },
                    verticalPosition: {
                      offset: 0,
                    },
                  },
                }),
              ],
            }),
          ],
        }),
      };
};

export default CourrierHeader;