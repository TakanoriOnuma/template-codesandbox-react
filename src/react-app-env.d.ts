/// <reference types="react-scripts" />

// TypeScript 6 では副作用 import (import "./styles.css") にも型宣言が必要になる (TS2882)。
// react-scripts の型は *.module.css しか宣言していないため、プレーンな CSS をここで宣言する。
declare module "*.css";
