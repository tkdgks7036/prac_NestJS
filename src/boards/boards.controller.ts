import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDto } from './dto/boards.dto';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    @Get()
    getAllBoards() {
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(@Body() data: CreateBoardDto) {
        return this.boardsService.createBoard(data);
    }
}
