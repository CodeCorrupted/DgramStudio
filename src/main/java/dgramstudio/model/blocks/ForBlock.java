package dgramstudio.model.blocks;

import javafx.scene.layout.Pane;

public class ForBlock extends CompoundBlock{

    public ForBlock(int blockNumber, BlockType type) {
        super(blockNumber, type);
    }

    @Override
    public Block createBlock() {
        return null;
    }

    @Override
    public void drawLines(Pane pane) {

    }
}
