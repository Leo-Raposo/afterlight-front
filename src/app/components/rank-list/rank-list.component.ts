import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

interface RankItem {
  position: number;
  name: string;
  points: number;
  avatar?: string;
}

@Component({
  selector: 'app-rank-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rank-list.component.html',
  styleUrl: './rank-list.component.css'
})

export class RankListComponent {
  rankItems: RankItem[] = [
    { position: 1, name: "Leonardo Raposo", points: 15850, avatar: "https://cdn.builder.io/api/v1/image/assets/488eda03dadc464d9f061e6f2fbf3e3d/4876c08b4f32accb430cc0ce18c008e5e2eae8201233f5ef4c4ff0982a829772?apiKey=488eda03dadc464d9f061e6f2fbf3e3d&" },
    { position: 2, name: "Usuário 2", points: 12550, avatar: "https://cdn.builder.io/api/v1/image/assets/488eda03dadc464d9f061e6f2fbf3e3d/3435da10ba38084f177bb02887fba17e30cc7bd336b58437fe253bcc322f91ba?apiKey=488eda03dadc464d9f061e6f2fbf3e3d&" },
    { position: 3, name: "Usuário 3", points: 11120, avatar: "https://cdn.builder.io/api/v1/image/assets/488eda03dadc464d9f061e6f2fbf3e3d/61d81e2f6b1c4130f80ca75e51f94ff243b0a9a5acfbee799c782c81c3672a51?apiKey=488eda03dadc464d9f061e6f2fbf3e3d&" },
    { position: 4, name: "Usuário 4", points: 9050 },
    { position: 5, name: "Usuário 5", points: 9000 },
    { position: 6, name: "Usuário 6", points: 8500 },
    { position: 7, name: "Usuário 7", points: 8450 },
    { position: 8, name: "Usuário 8", points: 7900 }
  ];
}
