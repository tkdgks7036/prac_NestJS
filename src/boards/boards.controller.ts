import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/boards.dto';
import { Board, BoardStatus } from './boards.model';
import { stat } from 'fs';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    //create
    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() data: CreateBoardDto): Board {
        return this.boardsService.createBoard(data);
    }

    //read
    @Get()
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    //update
    @Patch('/:id/status')
    updateBoardStatus(@Param('id') id: string, @Body() status: BoardStatus): Board {
        return this.boardsService.updateBoardStatus(id, status);
    }

    //delete
    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }
}
