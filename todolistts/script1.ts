var statusENUMS=
    {
        ACTIVE: "ACTIVE",
        COMPLETE : "COMPLETE",
        DELETED : "DELETED"
    }

class todo
{
    title:string;
    status:string;
    constructor(title:string )
    {
        this.title=title;
        this.status= statusENUMS.ACTIVE;
    }
}

class a
{

    list : todo[];
    constructor()
    {
        this.list=[];
    }
    add(v:string)
    {
        var y=new todo(v)
       y.status=statusENUMS.ACTIVE;
        this.list.push(y);
    }

    remove(v:number)
    {
        this.list[v].status=statusENUMS.DELETED;
    }
    complete(v:number)
    {
        this.list[v].status=statusENUMS.COMPLETE;
    }
    active(v:number)
    {
        this.list[v].status=statusENUMS.ACTIVE;
    }

    showList()
    {
      return this.list;
    }

}

 var listObj=new a();