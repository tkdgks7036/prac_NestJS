import { Injectable } from '@nestjs/common';
import { BoardsRepository } from './boards.repository';
import { Board } from './boards.model';

@Injectable()
export class BoardsService {
    constructor(private readonly boardsRepository: BoardsRepository) { }

    getAllBoards() {
        return this.boardsRepository.getAllBoards();
    }

    createBoard(title: string, description: string) {
        return this.boardsRepository.createBoard(title, description);
    }
}
