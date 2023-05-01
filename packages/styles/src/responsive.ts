export enum Breakpoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type ResponsiveProperty<Type> = Type | Partial<Record<Breakpoints, Type>>;
