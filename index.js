import {
  ARMaterialProperty,
  ARMaterials,
  ARMaterial,
  ARBox,
  ARCylinder,
  ARSphere,
  ARSKScene,
  ARSKLabel,
  ARPyramid,
  ARCone,
  ARPlane,
  ARSphere,
  ARText,
  ARTorus,
  ARTube,
  ARCapsule
} from "react-reality";
import PropTypes from "prop-types";
import { ARGeometry } from "../GitHub/react-native-arkit-swift/components/ARGeometry";
//#region Materials
export const ARColor = ({ color, index }) => {
  if (typeof index == "undefined") {
    return (
      <ARMaterials>
        <ARMaterialProperty color={color} />
      </ARMaterials>
    );
  } else {
    return (
      <ARMaterial index={index}>
        <ARMaterialProperty color={color} />
      </ARMaterial>
    );
  }
};
export const ARTexture = ({ path, index }) => {
  if (typeof index == "undefined") {
    return (
      <ARMaterials>
        <ARMaterialProperty path={path} />
      </ARMaterials>
    );
  } else {
    return (
      <ARMaterial>
        <ARMaterialProperty path={path} />
      </ARMaterial>
    );
  }
};
//#endregion
const ARColoredGeometry = G => props => {
  return (
    <G {...props}>
      <ARColor color={props.color} />
    </G>
  );
};
const ARTexturedGeometry = G => props => {
  return (
    <G {...props}>
      <ARTexture path={props.path} />
    </G>
  );
};
//#region Geometries
export const ARColoredBox = ARColoredGeometry(ARBox);
export const ARColoredCylinder = ARColoredGeometry(ARCylinder);
export const ARColoredCone = ARColoredGeometry(ARCone);
export const ARColoredCapsule = ARColoredGeometry(ARCapsule);
export const ARColoredPlane = ARColoredGeometry(ARPlane);
export const ARColoredPyramid = ARColoredGeometry(ARPyramid);
export const ARColoredShape = ARColoredGeometry(ARShape)
export const ARColoredSphere = ARColoredGeometry(ARSphere);
export const ARColoredText = ARColoredGeometry(ARText);
export const ARColoredTorus = ARColoredGeometry(ARTorus);
export const ARColoredTube = ARColoredGeometry(ARTube);

export const ARTexturedBox = ARTexturedGeometry(ARBox);
export const ARTexturedCylinder = ARTexturedGeometry(ARCylinder);
export const ARTexturedCone = ARTexturedGeometry(ARCone);
export const ARTexturedCapsule = ARTexturedGeometry(ARCapsule);
export const ARTexturedPlane = ARTexturedGeometry(ARTexturedPlane);
export const ARTexturedPyramid = ARTexturedGeometry(ARTexturedPyramid);
export const ARTexturedShape = ARTexturedGeometry(ARShape)
export const ARTexturedSphere = ARTexturedGeometry(ARSphere);
export const ARTexturedText = ARTexturedGeometry(ARText);
export const ARTexturedTorus = ARTexturedGeometry(ARTorus);
export const ARTexturedTube = ARTexturedGeometry(ARTube);
//#endregion
//#region adding geometries to nodes
const GeoNode = G => props => {
  return (
    <ARNode {...props}>
      <G {...props} />
    </ARNode>
  );
};
export const ARColoredBoxNode = GeoNode(ARColoredBox)
export const ARColoredCapsuleNode = GeoNode(ARColoredCapsule)
export const ARColoredCapsuleNode = GeoNode(ARColoredCapsule)
export const ARColoredCylinderNode = GeoNode(ARColoredCylinder)
export const ARColoredPlaneNode = GeoNode(ARColoredPlane)
export const ARColoredPyramidNode = GeoNode(ARColoredPyramid)
export const ARColoredPyramidNode = GeoNode(ARColoredPyramid)
export const ARColoredShapeNode = GeoNode(ARColoredShape)
export const ARColoredSphereNode = GeoNode(ARColoredSphere)
export const ARColoredTorusNode = GeoNode(ARColoredTorus)
export const ARColoredTubeNode = GeoNode(ARColoredTube)

export const ARTexturedBoxNode = GeoNode(ARTexturedBox)
export const ARTexturedCapsuleNode = GeoNode(ARTexturedCapsule)
export const ARTexturedCapsuleNode = GeoNode(ARTexturedCapsule)
export const ARTexturedCylinderNode = GeoNode(ARTexturedCylinder)
export const ARTexturedPlaneNode = GeoNode(ARTexturedPlane)
export const ARTexturedPyramidNode = GeoNode(ARTexturedPyramid)
export const ARTexturedPyramidNode = GeoNode(ARTexturedPyramid)
export const ARTexturedShapeNode = GeoNode(ARTexturedShape)
export const ARTexturedSphereNode = GeoNode(ARTexturedSphere)
export const ARTexturedTorusNode = GeoNode(ARTexturedTorus)
export const ARTexturedTubeNode = GeoNode(ARTexturedTube)
//#endregion

//#sign
export const ARSign = props => {
  <ARPlane {...props} >
    <ARMaterial id={0}>
      <ARMaterialProperty>
        <ARSKScene
          height={props.height * props.ppm}
          width={props.width * props.ppm}
        >
          <ARSKLabel text={props.text} />
        </ARSKScene>
      </ARMaterialProperty>
    </ARMaterial>
  </ARPlane>;
};
ARSign.defaultProps = {
  ppm: 100 * 38 // 100 dpi
};
ARSign.propTypes = {
  ...ARPlane.propTypes,
  ppm: PropTypes.number,
  text: PropTypes.string.isRequired
};
export const ARSignNode = GeoNode(ARSign)