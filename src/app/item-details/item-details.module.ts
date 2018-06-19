import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details.component';
import { ItemCommentComponent } from '../item-comment/item-comment.component';

const routes: Routes = [
    {
        path: ':id',
        component: ItemDetailsComponent
    }
]

@NgModule({
    imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
    declarations: [ItemDetailsComponent, ItemCommentComponent],
    exports: [ItemDetailsComponent, RouterModule]
})
export class ItemDetailsModule {}