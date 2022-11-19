import BlobImage from "/home/amaury/repos/botnot/src/utils/KeyExists/BlobImage.js"
import FooterImg from "../Images/Footer.png";
import { Footer, Paragraph, ImageRun } from "docx";

const CourrierFooter = () => {
    return {
        first: new Footer({
          children: [
            // Footer image
            new Paragraph({
              children: [
                new ImageRun({
                  data: BlobImage(FooterImg),
                  transformation: {
                    width: 800,
                    height: 143,
                  },
                  floating: {
                    horizontalPosition: {
                      offset: 0,
                    },
                    verticalPosition: {
                      offset: 9180000,
                    },
                  },
                }),
              ],
            }),
          ],
        }),
      };
}

export default CourrierFooter;