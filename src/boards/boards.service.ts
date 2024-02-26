import { Injectable } from '@nestjs/common';
import { BoardsRepository } from './boards.repository';
import { CreateBoardDto } from './dto/boards.dto';
import { Board, BoardStatus } from './boards.model';

@Injectable()
export class BoardsService {
    constructor(private readonly boardsRepository: BoardsRepository) { }

    //create
    createBoard(data: CreateBoardDto): Board {
        return this.boardsRepository.createBoard(data);
    }

    //read
    getAllBoards(): Board[] {
        return this.boardsRepository.getAllBoards();
    }

    getBoardById(id: string): Board {
        return this.boardsRepository.getBoardById(id);
    }

    //update
    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.boardsRepository.getBoardById(id);
        board.status = status;

        return board;
    }

    //delete
    deleteBoard(id: string): void {
        this.boardsRepository.deleteBoard(id);
    }
}
