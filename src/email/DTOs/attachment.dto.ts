import { IsString } from "class-validator";

class Attachment {
    @IsString()
    path: string;
}

export default Attachment