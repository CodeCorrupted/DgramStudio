import type { DiagramNode } from '../types';

/**
 * Busca un nodo por su ID recursivamente en el árbol.
 */
export function findNodeById(nodes: DiagramNode[], id: string): DiagramNode | null {
  for (const node of nodes) {
    if (node.id === id) return node;

    if (node.children?.length) {
      const found = findNodeById(node.children, id);
      if (found) return found;
    }

    if (node.thenBranch?.length) {
      const found = findNodeById(node.thenBranch, id);
      if (found) return found;
    }

    if (node.elseBranch?.length) {
      const found = findNodeById(node.elseBranch, id);
      if (found) return found;
    }
  }

  return null;
}

/**
 * Inserta un nuevo nodo en el árbol del diagrama.
 * Base para que ustedes implementen la lógica de colocación exacta.
 */
export function insertNode(
  nodes: DiagramNode[],
  newNode: DiagramNode,
  _targetId?: string
): DiagramNode[] {
  // Implementación base inicial: añade al nivel actual
  return [...nodes, newNode];
}

/**
 * Elimina un nodo por ID recursivamente del árbol.
 */
export function removeNodeById(nodes: DiagramNode[], id: string): DiagramNode[] {
  return nodes
    .filter((node) => node.id !== id)
    .map((node) => ({
      ...node,
      children: node.children ? removeNodeById(node.children, id) : undefined,
      thenBranch: node.thenBranch ? removeNodeById(node.thenBranch, id) : undefined,
      elseBranch: node.elseBranch ? removeNodeById(node.elseBranch, id) : undefined,
    }));
}

/**
 * Actualiza los datos de un nodo específico por ID.
 */
export function updateNodeById(
  nodes: DiagramNode[],
  id: string,
  updater: Partial<DiagramNode>
): DiagramNode[] {
  return nodes.map((node) => {
    if (node.id === id) {
      return { ...node, ...updater };
    }

    return {
      ...node,
      children: node.children ? updateNodeById(node.children, id, updater) : undefined,
      thenBranch: node.thenBranch ? updateNodeById(node.thenBranch, id, updater) : undefined,
      elseBranch: node.elseBranch ? updateNodeById(node.elseBranch, id, updater) : undefined,
    };
  });
}
