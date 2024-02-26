import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    @Get()
    getAllBoards() {
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body('title') title: string,
        @Body('description') description: string
    ) {
        return this.boardsService.createBoard(title, description);
    }
}
