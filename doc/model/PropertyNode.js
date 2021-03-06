'use strict';

var DocumentedNode = require('./DocumentedNode');

function PropertyNode() {
  PropertyNode.super.apply(this, arguments);
}

DocumentedNode.extend(PropertyNode);

PropertyNode.define({
  type: 'property',
  parent: 'id', // id of parent class or module
  name: 'string',
  dataType: { type: 'string', optional: true },
  isStatic: { type: 'boolean', default: false },
});

module.exports = PropertyNode;
