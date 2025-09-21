// Type declarations for modules without types

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.webp" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

// Lottie animation modules
declare module "../../assets/lottie/build" {
  const value: any;
  export default value;
}

declare module "../../assets/lottie/codingPerson" {
  const value: any;
  export default value;
}

declare module "../../assets/lottie/splashAnimation" {
  const value: any;
  export default value;
}

// Additional lottie asset paths
declare module "*/assets/lottie/*" {
  const value: any;
  export default value;
}

// Require function for importing images
declare const require: {
  (path: string): any;
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    (id: string): any;
  };
};