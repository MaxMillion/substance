'use strict';

var PropertyAnnotation = require('../../model/PropertyAnnotation');
var Fragmenter = require('../../model/Fragmenter');

function Subscript() {
  Subscript.super.apply(this, arguments);
}

PropertyAnnotation.extend(Subscript);

Subscript.type = 'subscript';

// hint for rendering in presence of overlapping annotations
Subscript.fragmentation = Fragmenter.ANY;

module.exports = Subscript;