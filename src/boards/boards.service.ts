import { Injectable } from '@nestjs/common';
import { BoardsRepository } from './boards.repository';
import { Board } from './boards.model';
import { CreateBoardDto } from './dto/boards.dto';

@Injectable()
export class BoardsService {
    constructor(private readonly boardsRepository: BoardsRepository) { }

    getAllBoards() {
        return this.boardsRepository.getAllBoards();
    }

    createBoard(data: CreateBoardDto) {
        return this.boardsRepository.createBoard(data);
    }
}
