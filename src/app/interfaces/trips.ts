export class Viagem {
  participantes: Participante[] = [];
  estaCancelada: boolean = false;

  constructor(
    public viagem: string,
    public inicio: Date,
    public fim: Date,
    public criadoPor: string,
    private _id: number = Date.now()
  ) {}

  get id(): number {
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
