import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DrawerModule } from 'primeng/drawer';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    DrawerModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // ✅ Corrected from "styleUrl"
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  visible: boolean = false;

  ngOnInit() {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' }
    ];
  }
}
