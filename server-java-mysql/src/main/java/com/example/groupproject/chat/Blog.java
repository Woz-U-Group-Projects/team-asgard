package com.example.groupproject.chat;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.hibernate.annotations.CreationTimestamp;

//import javax.validation.constraints.NotNull;

	import java.util.Date;

	//npm simport com.fasterxml.jackson.annotation.JsonFormat;

	@Entity
	@Table(name="blog")
	public class Blog {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Integer id;
		private String title;
	    private String name;
		private String content;
		private byte[] image;
		@CreationTimestamp
		@Temporal(TemporalType.DATE)
		@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd") 
		private Date date;
	
	    public Date getDate() {
			return date;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public void setDate(Date date) {
			this.date = date;
		}

	
		
		public byte[] getImage() {
			return image;
		}

		public void setImage(byte[] image) {
			this.image = image;
		}

		public Integer getId() {
	        return id;
	    }

	    public void setId(Integer id) {
	        this.id = id;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getContent() {
	        return content;
	    }

	    public void setContent(String content) {
	        this.content = content;
	    }

	    
	    


	    
	    
	    
}
