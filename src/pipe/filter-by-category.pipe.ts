import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  standalone: true,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(
    categories: { uuid: string }[],
    selectedCategory: { uuid: string }
  ): any[] {
    return categories.filter((cat) => cat.uuid === selectedCategory.uuid);
  }
}
