package com.example.groupproject.chat;

	import javax.persistence.*;
	
	import javax.validation.constraints.NotNull;

	import java.util.Date;

	import com.fasterxml.jackson.annotation.JsonFormat;

	@Entity
	@Table(name="blog")
	public class Blog {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;
	    private String name;
	    private String content;
	   

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

	    @Column(name="date")
	    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	    @Temporal(TemporalType.DATE)
	    @NotNull
	    private Date date;
	    
	    public void setDate(Date date){
	        this.date = date;
	    }

	    public Date getDate(){
	        return this.date;
	    }


	    
	    
	    
}
