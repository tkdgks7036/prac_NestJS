import { Injectable } from "@nestjs/common";
import { Board, BoardStatus } from "./boards.model";
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from "./dto/boards.dto";

@Injectable()
export class BoardsRepository {
    private boards: Board[] = [];

    getAllBoards() {
        return this.boards;
    }

    createBoard(data: CreateBoardDto) {
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
}