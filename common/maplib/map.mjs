// Copyright 2021 HITCON Online Contributors
// SPDX-License-Identifier: BSD-2-Clause

import assert from 'assert';

/**
 * Map represents the loaded map. A map is multiple layers of 2D grid of cells.
 * Each cell of the map is usually a string or boolean.
 * The documentation for format of the map is found at the end of this file.
 */
class Map {
  /**
   * Construct an empty map.
   * @param {GraphicAsset} asset - The asset that is used with this set of map.
   */
  constructor(asset) {
    void asset;
    assert.fail('Not implemented');
  }

  /**
   * Load a map from the JSON object.
   * @param {Object} map - The JSON object representing the map.
   * @return {Boolean} success - Return true if successful.
   */
  appendMap(map) {
    void map;
    assert.fail('Not implemented');
    return false;
  }

  /**
   * Get the raw cell content at the coordinate.
   * @param {String} layer - The raw layer designation.
   * @param {Number} x - The X coordinate, must be integer.
   * @param {Number} y - The Y coordinate, must be integer.
   * @return {String} cell - The raw content of the cell. '' if any error.
   */
  getCell(layer, x, y) {
    void [layer, x, y];
    assert.fail('Not implemented');
    return '';
  }

  /**
   * Return the information required to render the a cell.
   * @param {String} layer - The raw layer designation.
   * @param {Number} x - The X coordinate, must be integer.
   * @param {Number} y - The Y coordinate, must be integer.
   * @return {Object} info - An object denoting the image information. It
   * should contain:
   * - image: The HTMLImageElement for the image from which to render the tile.
   *   If we are not running on the browser or GraphicAsset.loadAssets() is not
   *   called. This field may be absent.
   * - imageRef: The name of the image in the asset config.
   * - srcX: The source X coordinate in the image above.
   * - srcY: The source Y coordinate in the image above.
   * - srcWidth: The width of the tile.
   * - srcHeight: The height of the tile.
   */
  getRenderInfo(layer, x, y) {
    void [layer, x, y];
    assert.fail('Not implemented');
    return undefined;
  }
}

export default Map;

/*
Sample format for the map:
{
  "ground": ["ground","ground","ground","ground","ground"],
  "wall": [true, true, true, false, false, false],
  "object": [null, null, null, "bar0", null, null],
  "startX": 0,
  "startY": 0,
  "width": 3,
  "height": 2
}
*/