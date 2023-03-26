import CourrierAdresse from "./CourrierAdresse";
import CourrierDate from "./CourrierDate";
import MiseEnPage from "./MiseEnPage";
import EmptySpacing from "./EmptySpacing";
import FollowedBy from "./FollowedBy";
import ClerkMail from "./ClerckMail";
import CourrierObjet from "./CourrierObjet";
import BulletPointConfig from "./BulletPointConfig";
import CourrierStyles from "./CourrierStyles";
import CourrierHeader from "./CourrierHeader";
import CourrierFooter from "./CourrierFooter";
import CourrierSignature from "./CourrierSignature";
import CourrierBody from "./CourrierBody/CourrierBody";

// arguments :

// postalAddress: string,
// clerkName: string,
// clerkMail: string,
// courrierObject: string,
// bodyObject: array

// return an object
const CourrierBoilerplate = async(
  postalType,
  clerkName,
  clerkMail,
  courrierObject,
  notaryName,
  bodyObject,
  clientObject
) => {
  return {
    numbering: BulletPointConfig(),
    styles: CourrierStyles(),
    sections: [
      {
        properties: MiseEnPage(38, 42.5, 50, 25),
        headers: CourrierHeader(),
        footers: CourrierFooter(),
        children: [
          ...EmptySpacing(4),

          ...await CourrierAdresse(postalType, clientObject), //variable

          ...EmptySpacing(),

          CourrierDate(), // date of the current day

          ...EmptySpacing(),

          ...FollowedBy(clerkName), //variable

          ClerkMail(clerkMail), //variable

          ...EmptySpacing(2),

          CourrierObjet(courrierObject), //variable

          ...EmptySpacing(),

          ...CourrierBody(bodyObject ,clientObject),

          ...CourrierSignature(notaryName),
        ],
      },
    ],
  };
};

export default CourrierBoilerplate;
