import {
  ARMaterialProperty,
  ARMaterials,
  ARMaterial,
  ARBox,
  ARCylinder,
  ARSphere,
  ARSKScene,
  ARSKLabel
} from "react-reality";
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
export const ARColoredPlane = ARColoredGeometry(ARColoredPlane);
export const ARColoredPyramid = ARColoredGeometry(ARColoredPyramid);
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
export const ARTexturedSphere = ARTexturedGeometry(ARSphere);
export const ARTexturedText = ARTexturedGeometry(ARText);
export const ARTexturedTorus = ARTexturedGeometry(ARTorus);
export const ARTexturedTube = ARTexturedGeometry(ARTube);
//#endregion

//#sign
export const ARSign = props => {
  <ARPlane>
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
