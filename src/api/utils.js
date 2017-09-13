// =============================================================
//
// Name: utils
// -> Description:
//
// Author: mitramejia
// Created at: 9/10/17
//
// =============================================================

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
