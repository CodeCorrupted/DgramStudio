package dgramstudio.model.blocks;

import java.util.List;

public abstract class CompoundBlock extends Block{
    private List<Block> blocks;

    public CompoundBlock(int blockNumber, BlockType type) {
        super(blockNumber, type);
    }

    public Block getBlock(int pos){
        return blocks.get(pos);
    }

    public void addBlock(Block block){
        blocks.add(block);
    }

    public void removeBlock(Block block){
        blocks.remove(block);
    }


}
