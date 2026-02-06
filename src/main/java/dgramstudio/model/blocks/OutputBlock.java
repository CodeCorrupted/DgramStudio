package dgramstudio.model.blocks;

import javafx.scene.layout.Pane;

public class OutputBlock extends SimpleBlock{

    public OutputBlock(int blockNumber, BlockType type) {
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
