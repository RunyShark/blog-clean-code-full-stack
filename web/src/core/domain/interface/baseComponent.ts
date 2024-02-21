export type BaseComponentProps = Partial<{
  id: string;
  style: React.CSSProperties;
  className: string;
  children: React.ReactNode;
}>;

export type ValidSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | 'base';

export type Size<Size, K extends Size> = K;
export type Type = React.HTMLInputTypeAttribute;
export type FlexDirection = React.CSSProperties['flexDirection'];
export type JustifyContent = React.CSSProperties['justifyContent'];
export type AlignItems = React.CSSProperties['alignItems'];
export type Color = React.CSSProperties['color'];
export type TextAlign = React.CSSProperties['textAlign'];
export type FontWeight = React.CSSProperties['fontWeight'];
export type Width = React.CSSProperties['width'];
export type Height = React.CSSProperties['height'];
export type Padding = React.CSSProperties['padding'];
export type Margin = React.CSSProperties['margin'];
export type Border = React.CSSProperties['border'];
export type BorderRadius = React.CSSProperties['borderRadius'];
export type BackgroundColor = React.CSSProperties['backgroundColor'];
export type BackgroundImage = React.CSSProperties['backgroundImage'];
export type BackgroundSize = React.CSSProperties['backgroundSize'];
export type BackgroundPosition = React.CSSProperties['backgroundPosition'];
export type BackgroundRepeat = React.CSSProperties['backgroundRepeat'];
export type BoxShadow = React.CSSProperties['boxShadow'];
export type Overflow = React.CSSProperties['overflow'];
export type OverflowX = React.CSSProperties['overflowX'];
export type OverflowY = React.CSSProperties['overflowY'];
export type Flex = React.CSSProperties['flex'];
export type FlexWrap = React.CSSProperties['flexWrap'];
export type FlexGrow = React.CSSProperties['flexGrow'];
export type FlexShrink = React.CSSProperties['flexShrink'];
export type FlexBasis = React.CSSProperties['flexBasis'];
export type Cursor = React.CSSProperties['cursor'];
export type Transition = React.CSSProperties['transition'];
export type TransitionProperty = React.CSSProperties['transitionProperty'];
export type TransitionDuration = React.CSSProperties['transitionDuration'];
export type TransitionTimingFunction =
  React.CSSProperties['transitionTimingFunction'];
export type TransitionDelay = React.CSSProperties['transitionDelay'];
export type Transform = React.CSSProperties['transform'];
export type TransformOrigin = React.CSSProperties['transformOrigin'];
export type Appearance = React.CSSProperties['appearance'];
export type UserSelect = React.CSSProperties['userSelect'];
export type PointerEvents = React.CSSProperties['pointerEvents'];
export type Visibility = React.CSSProperties['visibility'];
export type VerticalAlign = React.CSSProperties['verticalAlign'];
export type WhiteSpace = React.CSSProperties['whiteSpace'];
export type WordBreak = React.CSSProperties['wordBreak'];
export type Outline = React.CSSProperties['outline'];
export type OutlineOffset = React.CSSProperties['outlineOffset'];
export type OutlineWidth = React.CSSProperties['outlineWidth'];
export type OutlineStyle = React.CSSProperties['outlineStyle'];
export type OutlineColor = React.CSSProperties['outlineColor'];
export type Opacity = React.CSSProperties['opacity'];
export type ZIndex = React.CSSProperties['zIndex'];
export type Position = React.CSSProperties['position'];
export type Top = React.CSSProperties['top'];
export type Right = React.CSSProperties['right'];
export type Bottom = React.CSSProperties['bottom'];
export type Left = React.CSSProperties['left'];
export type Display = React.CSSProperties['display'];
export type ColumnGap = React.CSSProperties['columnGap'];
export type RowGap = React.CSSProperties['rowGap'];
export type PlaceContent = React.CSSProperties['placeContent'];
export type PlaceItems = React.CSSProperties['placeItems'];
export type PlaceSelf = React.CSSProperties['placeSelf'];
export type JustifyItems = React.CSSProperties['justifyItems'];
export type JustifySelf = React.CSSProperties['justifySelf'];
export type AlignContent = React.CSSProperties['alignContent'];
export type AlignSelf = React.CSSProperties['alignSelf'];
export type Order = React.CSSProperties['order'];
export type GridColumnStart = React.CSSProperties['gridColumnStart'];
export type GridColumnEnd = React.CSSProperties['gridColumnEnd'];
export type GridRowStart = React.CSSProperties['gridRowStart'];
export type GridRowEnd = React.CSSProperties['gridRowEnd'];
export type GridArea = React.CSSProperties['gridArea'];
export type GridTemplate = React.CSSProperties['gridTemplate'];
export type GridTemplateColumns = React.CSSProperties['gridTemplateColumns'];
export type GridTemplateRows = React.CSSProperties['gridTemplateRows'];
export type GridTemplateAreas = React.CSSProperties['gridTemplateAreas'];
export type GridAutoColumns = React.CSSProperties['gridAutoColumns'];
export type GridAutoRows = React.CSSProperties['gridAutoRows'];
export type GridAutoFlow = React.CSSProperties['gridAutoFlow'];
export type Grid = React.CSSProperties['grid'];
export type GridColumn = React.CSSProperties['gridColumn'];
export type GridRow = React.CSSProperties['gridRow'];
export type Gap = React.CSSProperties['gap'];
