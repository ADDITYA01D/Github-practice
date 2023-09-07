package com.bookstore.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "author")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Author extends BaseEntity
{

	@Column(name="name",length=25)
	private String name;
	
	@Column(name="image_path",length=512)
	private String imagePath;
	
	@Column(name="biography", length=1500)
	private String bio;
	
	@OneToMany(mappedBy="author")
	private List<Book> book=new ArrayList<>();

}
