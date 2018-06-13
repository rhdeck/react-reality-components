# react-reality-components

Helper components to allow terser implementation of AR using [react-reality](https://github.com/rhdeck/react-reality)

# ARSign

Quickly create a 2-d sign with text floating in space. Acts as a geometry

### Props

`text`: The text to display

### Example

```jsx
<ARNode>
  <ARSign text="Hi there everybody" />
</ARNode>
```

**Note** An even higher-level implementation that smushes the node props in is available as `<ARSignNode />`

# ARPlaneScene

A more generalized implementation that mounts an `<ARSKScene />` on a `<ARPlane >` to speed up generation of 2-D content floating in space.

# Enhanced Geometries

## Colored Geometries

These components apply a `color` prop to the diffuse property of all sides of the geometry.

- ARColoredBox
- ARColoredCapsule
- ARColoredCone
- ARColoredCapsule
- ARColoredPlane
- ARColoredPyramid
- ARColoredShape
- ARColoredSphere
- ARColoredText
- ARColoredTorus
- ARColoredTube

## Textured Geometries

These components apply a `path` prop containing a path to a locally saved texture to all sides of the geometry.

- ARTexturedBox
- ARTexturedCapsule
- ARTexturedCone
- ARTexturedCapsule
- ARTexturedPlane
- ARTexturedPyramid
- ARTexturedShape
- ARTexturedSphere
- ARTexturedText
- ARTexturedTorus
- ARTexturedTube

# Enhanced Nodes

## Basic Geometry-Node Combinations

The following components smush the properties of the node with the properties of the geometry. Materials can be applied as children.

- ARBoxNode
- ARCapsuleNode
- ARConeNode
- ARCapsuleNode
- ARPlaneNode
- ARPyramidNode
- ARShapeNode
- ARSphereNode
- ARTextNode
- ARTorusNode
- ARTubeNode
- ARSignNode

## Colored Geometry-Node Combinations

The following smush the properties of the node together with the properties of the geometry and add a prop `color` to trigger the diffuse color of the geometry across all surfaces. No material components need to be added.

- ARColoredBoxNode
- ARColoredCapsuleNode
- ARColoredConeNode
- ARColoredCapsuleNode
- ARColoredPlaneNode
- ARColoredPyramidNode
- ARColoredShapeNode
- ARColoredSphereNode
- ARColoredTextNode
- ARColoredTorusNode
- ARColoredTubeNode

## Textured Geometry-Node Combinations

The following components smush the props of the node and the geometry but allo add a prop `path` to a path texture to be used as the diffuse material. No material components need to be added

- ARTexturedBoxNode
- ARTexturedCapsuleNode
- ARTexturedConeNode
- ARTexturedCapsuleNode
- ARTexturedPlaneNode
- ARTexturedPyramidNode
- ARTexturedShapeNode
- ARTexturedSphereNode
- ARTexturedTextNode
- ARTexturedTorusNode
- ARTexturedTubeNode

# Enhanced Materials

## ARColor

Higher-order component to apply a `color` prop as the material to the geometry you are attaching to.

```jsx
<ARBox>
  <ARColor color="red" />
</ARBox>
```

If prop `index` is specified, the color is applied only to that face of the geometry.

```jsx
<ARBox>
  <ARColor index={0} color="red" />
  <ARColor index={1} color="blue" />
  <ARColor index={2} color="red" />
  <ARColor index={3} color="blue" />
  <ARColor index={4} color="red" />
  <ARColor index={5} color="blue" />
</ARBox>
```

## ARTexture

Higher-order component to apply a `path` prop as the path to the texture image for the geometry you are attaching to.

```jsx
<ARBox>
  <ARTexture path={mytexturepath} />
</ARBox>
```

If prop `index` is specified, the texture is applied only to that face of the geometry.

```jsx
<ARBox>
  <ARColor index={0} color="red" />
  <ARTexture index={1} path={mytexturepath} />
  <ARColor index={2} color="red" />
  <ARTexture index={3} path={mytexturepath} />
  <ARColor index={4} color="red" />
  <ARTexture index={5} path={mytexturepath} />
</ARBox>
```
