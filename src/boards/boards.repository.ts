import { Injectable } from "@nestjs/common";
import { Board, BoardStatus } from "./boards.model";
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsRepository {
    private boards: Board[] = [];

    getAllBoards() {
        return this.boards;
    }

    createBoard(title: string, description: string) {
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        }
        this.boards.push(board);
        
        return board;
    }
}