import { v4 as uuidv4 } from 'uuid';

export class Viagem {

  constructor(
    public viagem: string,
    public inicio: Date,
    public fim: Date,
    public criadoPor: string,
    public email: string,
    public estaCancelada: boolean = false,
    public participante: Participante[] = [],
    private _id: string = uuidv4()
  ) {}

  get id(): string {
    return this._id;
  }
}

export class Participante {
  private _id: string = uuidv4();
  nome: string;
  email: string;
  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
    this._id = uuidv4();
  }

  get id(): string {
    return this._id;
  }
}
