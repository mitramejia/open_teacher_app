// =============================================================
//
// Name: testHelper
// -> Description:
//
// Author: mitramejia
// Created at: 9/4/17
//
// =============================================================
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

export function renderShallow(component) {
  const renderer = new ShallowRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}
