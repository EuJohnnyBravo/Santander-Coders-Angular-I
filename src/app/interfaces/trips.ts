import { v4 as uuidv4 } from 'uuid';

export class Viagem {
  participantes: Participante[] = [];


  constructor(
    public viagem: string,
    public inicio: Date,
    public fim: Date,
    public criadoPor: string,
    public email: string,
    private _id: string = uuidv4(),
    public estaCancelada: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }
}

export class Participante {
  nome: string;
  email: string;
  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}
