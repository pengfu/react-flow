import React, { DragEvent } from 'react';

const onDragStart = (event: DragEvent, nodeType: string) => {
  const eventX = event.clientX || event.pageX;
  const eventY = event.clientY || event.pageY;
  const boundingClientRect = (event.target as HTMLElement).getBoundingClientRect();
  const offsetX = boundingClientRect.x || boundingClientRect.left;
  const offsetY = boundingClientRect.y || boundingClientRect.top;

  event.dataTransfer.setData('application/reactflow', JSON.stringify({
    nodeType,
    delta: { x: eventX - offsetX, y: eventY - offsetY }
  }));
  event.dataTransfer.effectAllowed = 'move';
};

const Sidebar = () => {
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the left.</div>
      <div className="react-flow__node-input" onDragStart={(event: DragEvent) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="react-flow__node-default" onDragStart={(event: DragEvent) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
      <div className="react-flow__node-output" onDragStart={(event: DragEvent) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
    </aside>
  );
};

export default Sidebar;
