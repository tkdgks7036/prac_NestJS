import { Injectable } from "@nestjs/common";
import { Board, BoardStatus } from "./boards.model";
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from "./dto/boards.dto";

@Injectable()
export class BoardsRepository {
    private boards: Board[] = [];

    //create
    createBoard(data: CreateBoardDto): Board {
        const { title, description } = data;
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        }
        this.boards.push(board);

        return board;
    }

    //read
    getAllBoards() {
        return this.boards;
    }

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }

    //update

    //delete
    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }
}